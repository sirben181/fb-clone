import React, { useRef, useState } from 'react'
import './mainfeeds.css';
import Avatar from '@mui/material/Avatar'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import {FaVideo} from 'react-icons/fa'
import {FaRegGrinAlt} from 'react-icons/fa'
import {GrGallery} from 'react-icons/gr'
import Post from './Post';
import code from '../images/code.png'
import woman4 from '../images/woman4.jpg'
import soft from '../images/soft.png'
import page from '../images/page.png'
import prof1 from '../images/prof1.jpg'
import simple from '../images/simple.png'
import { collection, addDoc } from "firebase/firestore";
import db from './firebase';
import {useStateValue} from './StateProvider'
// import Status from './Status';
const Mainfeeds = () => {
    const[input,setInput]=useState('')
    const[{user},dispatch]=useStateValue()
    const filepickerRef=useRef(null)
    
    const handleSubmit=async (e)=>{
     e.preventDefault();
     //here we will have another function to be called i here
     const docRef = await addDoc(collection(db, "posts"), {
        message:input,
        image:user.photoURL,
        username:user.displayName,
        timestamp:new Date,
       });
       console.log("Document written with ID: ", docRef.id);
     // } catch (e) {
       // console.error("Error adding document: ", e);
     setInput('')
    }

    return (
        <div className="centralfeeds">
            {/* <Status /> */}
            <div className="status">
                <div className="createstory">
                   <div className="card1" style={{backgroundImage:`url(${user.photoURL})`,
                backgroundRepeat:'none'}}>
                
                      <AddCircleRoundedIcon  className="addstory"/>
                      <span>Create story</span>                  
                  </div>
                </div>
                <div className="card" style={{backgroundImage:`url(${code})`}}>
                    <Avatar   className="statusavatar" src={prof1}/>
                      <span>stephen james</span>                  
                </div>
                <div className="card" style={{backgroundImage:`url(${page})`}}>
                    <Avatar   className="statusavatar" src={woman4}/>
                    <span>ben turner</span> 
                </div>
                <div className="card" style={{backgroundImage:`url(${soft})`}}>
                    <Avatar   className="statusavatar" src={prof1}/>
                    <span>Donald Sutherland</span> 
                 </div>
                <div className="card" style={{backgroundImage:`url(${simple})`}}>
                    <Avatar   className="statusavatar" src={page}/>
                    <span>Austin mike</span> 
                 </div>
            </div>
            {/* <Input /> */}
            {/* we need a input form with a hidden button with the correct functionality */}
           
            {/* icons video photo ,image icon and emoji icon */}
            <div className="inputPost">
                <form onSubmit={handleSubmit}>
                    <Avatar src={user.photoURL} alt="" style={{marginRight:'10px' }} />
                    <input type="text" placeholder={`whats are u thing ${user.displayName}`} onChange={(e)=>setInput(e.target.value)} 
                    value={input}/>
                    <button type="submit" hidden> submit</button>
                </form>
                <div className="inputposticons">
                    {/* video */}
                    <div className="video">
                       <FaVideo style={{color:'red',fontSize:'24px',paddingTop:'-10px'}}/>
                       <span> live video</span>
                    </div>
                    
                    {/* photo */}
                    <div className="photo" onClick={()=>filepickerRef.current.click()}>
                    <GrGallery style={{color:'green',fontSize:'24px'}}/>
                    <span>Photo/video</span>
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
