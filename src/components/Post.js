import React, { useEffect, useState } from 'react'
import './post.css'
import Avatar from "@mui/material/Avatar"
import {BiComment} from "react-icons/bi"
import {FaThumbsUp}  from "react-icons/fa"
import {FaShare}  from "react-icons/fa"
import {useStateValue} from './StateProvider'
import { collection, query, onSnapshot } from "firebase/firestore";
import db from './firebase';

const Post = () => {
    const [{user},dispatch]=useStateValue()
    const [posts,setPosts]=useState('')
    useEffect(()=>{
getPosts();
    },[db])
    const getPosts=async()=>{
       

        const q = query(collection(db, "posts"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          setPosts(querySnapshot.forEach((doc) => ({
              username:doc.data().username,
              image:doc.data().image,
              timestamp:doc.data().timestamp,
              posttext:doc.data().message
          })));
    {/*   console.log("Current cities in CA: ", cities.join(", ")); */}
        });
    }

    return (
        <div className="post_container">
           <div className="post">
               <div className="post_header">
                 <Avatar src={posts.image}/>
                 <p> {posts.username}</p>
                 <p>10:30pm</p>
               </div>
               <div className="post_text">
               <span>{posts.posttext}</span>
               </div>
               <div className="post_image">
                   <img className="actual_image" alt=""/>
               </div>
               <div className="comment_icons">
                   <div className="comment">
                   <BiComment style={{fontSize:'27px',paddingRight:'10px'}}/>
                   <p>comment</p>
                   </div>
               <div className="like">
                  <FaThumbsUp style={{fontSize:'27px',paddingRight:'10px'}}/>
                  <p>like</p>
               </div>
               <div className="share">
               <FaShare style={{fontSize:'27px',paddingRight:'10px'}}/>
               <p>share</p>
               </div>
              
              
               </div>
             

           </div>
                       
            
        </div>
    )
}

export default Post
