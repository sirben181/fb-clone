import React, { useState } from 'react'
import './mainfeeds.css';
import Avatar from '@mui/material/Avatar'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import {FaVideo} from 'react-icons/fa'
import {FaRegGrinAlt} from 'react-icons/fa'
import {GrGallery} from 'react-icons/gr'
import Post from './Post';
import { collection, addDoc } from "firebase/firestore";
import db from './firebase';
import {useStateValue} from './StateProvider'
// import Status from './Status';
const Mainfeeds = () => {
    const[post,setPost]=useState('')
    const[{user},dispatch]=useStateValue()
    const handleSubmit=async (e)=>{
     e.preventDefault();

     //here we will have another function to be called i here
     const docRef = await addDoc(collection(db, "posts"), {
        message:post,
        timestamp:'',
       });
       console.log("Document written with ID: ", docRef.id);
     // } catch (e) {
       // console.error("Error adding document: ", e);
     setPost('')
    }

    return (
        <div className="centralfeeds">
            {/* <Status /> */}
            <div className="status">
                <div className="createstory">
                   <div className="card1">
                
                      <AddCircleRoundedIcon  className="addstory"/>
                      <span>Create story</span>                  
                  </div>
                </div>
                <div className="card">
                    <Avatar   className="statusavatar" src="../images/code1.png"/>
                      <span>benson kamau</span>                  
                </div>
                <div className="card">
                    <Avatar   className="statusavatar" src="../images/code1.png"/>
                    <span>benson kamau</span> 
                </div>
                <div className="card">
                    <Avatar   className="statusavatar" src="../images/code1.png"/>
                    <span>benson kamau</span> 
                 </div>
                <div className="card">
                    <Avatar   className="statusavatar" src="../images/code1.png"/>
                    <span>benson kamau</span> 
                 </div>
            </div>
            {/* <Input /> */}
            {/* we need a input form with a hidden button with the correct functionality */}
           
            {/* icons video photo ,image icon and emoji icon */}
            <div className="inputPost">
                <form onSubmit={handleSubmit}>
                    <Avatar src={user.photoURL} alt="" style={{marginRight:'10px'}} />
                    <input type="text" placeholder={`whats are u thing ${user.displayName}`} onChange={(e)=>setPost(e.target.value)} 
                    value={post}/>
                    <button type="submit" hidden> submit</button>
                </form>
                <div className="inputposticons">
                    {/* video */}
                    <div className="video">
                       <FaVideo style={{color:'red',fontSize:'24px',paddingTop:'-10px'}}/>
                       <span> live video</span>
                    </div>
                   
                    {/* photo */}
                    <div className="photo">
                    <GrGallery style={{color:'green',fontSize:'24px'}}/>
                    <span>Photo</span>
                    </div>
                   
                    {/* emoji */}
                    <div className="emoji">
                    <FaRegGrinAlt style={{color:'orange',fontSize:'24px'}}/>
                    <span>emoji</span>
                    </div>
                   
                </div>

            </div>

            <Post />
            
        </div>
    )
}

export default Mainfeeds
