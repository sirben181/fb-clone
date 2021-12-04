import React, { useEffect, useState } from 'react'
import './post.css'
import Avatar from "@mui/material/Avatar"
import {BiComment} from "react-icons/bi"
import {FaThumbsUp}  from "react-icons/fa"
import {FaShare}  from "react-icons/fa"
import {useStateValue} from './StateProvider'
import { collection, getDocs } from "firebase/firestore"; 
import db from './firebase';
import { PodcastsTwoTone } from '@mui/icons-material'

const Post = () => {
    const [{user},dispatch]=useStateValue()
    const [posts,setPosts]=useState('')
    useEffect(()=>{
getPosts();
    },[])
    const getPosts=async()=>{
        const querySnapshot = await getDocs(collection(db, "posts"));
        querySnapshot.orderBy("timestamp",'desc'),(snapshot)=>{
            setPosts(snapshot.docs)
            console.log(snapshot.docs)
        }
    }
    // db.collection('posts')
    // .orderBy("timestamp",'desc')
    // .onSnapshot((snapshot)=>{
    //  setPosts(snapshot.docs.map(doc=>({ 
    //  id:doc.id,
    //  data:doc.data()     
    // }) ))
    //  })

    return (
        <div className="post_container">
           <div className="post">
               <div className="post_header">
                 <Avatar src={post.data.image}/>
                 <p> {user.displayName}</p>
                 <p>10:30pm</p>
               </div>
               <div className="post_text">
               <span>{posts.data.message}</span>
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
