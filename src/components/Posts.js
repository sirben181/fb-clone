import React, { useEffect, useState } from 'react'
import Post from './Post'
import db from './firebase'
import { collection,orderBy, query, onSnapshot} from "firebase/firestore"
// import {} from '@mui/icons-material'


// const q = query(citiesRef, orderBy("name"), limit(3));
const Posts = () => {
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        const q = query(collection(db, "posts"),orderBy("timestamp", "desc"));
        const unsubscribe= onSnapshot(q, (querySnapshot) => {
           querySnapshot.forEach((doc) => {
              const data=doc.data()
               setPosts([data])
                  })
         });
    },[db])
       
    return (
        <div>
             {posts.map(post=>(
              <Post 
              username={post.username} 
              key={post.id}
              image={post.image}
              posttext={post.message}
              timestamp={post.timestamp}
              />
          ))}
          
        </div>
    )
}

export default Posts
