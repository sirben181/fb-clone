import React, { useEffect, useState } from 'react'
import Post from './Post'
import db from './firebase'
import { collection,orderBy, query, onSnapshot} from "firebase/firestore"
import { Error } from '@mui/icons-material'


// const q = query(citiesRef, orderBy("name"), limit(3));
const Posts = () => {
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        const q = query(collection(db, "posts"),orderBy("timestamp", "desc"));
        const unsubscribe= onSnapshot(q, (querySnapshot) => {
           querySnapshot.forEach((doc) => {
              const data=doc.data()
              setPosts([
                {
                username: posts.username,
                id:posts.id,
                image:posts.image,
                timestamp:posts.timestamp,
                posttext:posts.message,
              }]
                
              )
           },(error)=>{console.error(error)});
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
              timestamp={post.timestamp}
              />
          ))}
          
        </div>
    )
}

export default Posts
