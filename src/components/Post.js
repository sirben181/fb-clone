import React from 'react'
import './post.css'
import Avatar from "@mui/material/Avatar"
import {BiComment} from "react-icons/bi"
import {FaThumbsUp}  from "react-icons/fa"
import {FaShare}  from "react-icons/fa"
import {useStateValue} from './StateProvider'

const Post = () => {
    const [{user},dispatch]=useStateValue()
    return (
        <div className="post_container">
           <div className="post">
               <div className="post_header">
                 <Avatar src={user.photoURL}/>
                 <p> {user.displayName}</p>
                 <p>10:30pm</p>
               </div>
               <div className="post_text">
               <span>hello this is amazing</span>
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
