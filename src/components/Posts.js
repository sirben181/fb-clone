import React, { useEffect, useState } from 'react'
import Post from './Post'
import db from './firebase'
import { collection, query, onSnapshot} from "firebase/firestore"

const Posts = () => {
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        const q = query(collection(db, "posts"));
        const unsubscribe= onSnapshot(q, (querySnapshot) => {
           querySnapshot.forEach((doc) => {
              const data=doc.data()
              setPosts([{
                username:data.username,
                id:data.id,
                image:data.image,
                timestamp:data.timestamp,
                posttext:data.message,
             }])
           });
         });
    },[db])
       
    return (
        <div>
             {posts.map(post=>(
              <Post 
              username={post.username} 
              key={post.id}
              image={post.image}
              posttext={post.posttext}
              />
          ))}
          
        </div>
    )
}

export default Posts
