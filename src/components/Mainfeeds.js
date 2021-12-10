import React, { useEffect, useRef, useState } from 'react'
import './mainfeeds.css';
import Avatar from '@mui/material/Avatar'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import {FaVideo} from 'react-icons/fa'
import {FaRegGrinAlt} from 'react-icons/fa'
import {GrGallery} from 'react-icons/gr'
import code from '../images/code.png'
import woman4 from '../images/woman4.jpg'
import soft from '../images/soft.png'
import page from '../images/page.png'
import prof1 from '../images/prof1.jpg'
import simple from '../images/simple.png'
import db from './firebase';
import { collection,addDoc,serverTimestamp} from "firebase/firestore"
import {useStateValue} from './StateProvider'
import Posts from './Posts';
// import Status from './Status';
const Mainfeeds = () => {
    const inputRef=useRef(null)
    const[{user},dispatch]=useStateValue()
    const filepickerRef=useRef(null)
    const[imageToPost,setImageToPost]=useState(null)
   
        
    //  console.log(posttext)
   
    const handleSubmit=async (e)=>{
     e.preventDefault();
     //here we will have another function to be called i here
     const docRef = await addDoc(collection(db, "posts"), {
        message:inputRef.current.value,
        image:user.photoURL,
        username:user.displayName,
        timestamp:serverTimestamp()

       });
       console.log("Document written with ID: ", docRef.id);
     // } catch (e) {
       // console.error("Error adding document: ", e);
      inputRef.current.value=''
    }
     const addImageToPost=(e)=>{
        const reader=new FileReader()
        if(e.target.files[0] ){
            reader.readAsDataURL(e.target.files[0])
        }
        reader.onLoad=(readerEvent)=>{
            setImageToPost(readerEvent.target.result)
        }
     }
     const removeImage=()=>{
         setImageToPost(null)
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
                    <input type="text" placeholder={`whats are u thing ${user.displayName}`} onChange={(e)=>inputRef.current.value} 
                    ref={inputRef}/>
                    <button type="submit" hidden> submit</button>
                </form>
                {imageToPost && (<div onClick={removeImage} style={{display:'flex',flexDirection:'column'}}>
                     <img style={{height:'40px', width:'40px', objectFit:'contain'}} alt="" src={imageToPost}/>
                     <p style={{fontSize:'18px',color:'red', cursor:'pointer'}} >remove</p>
                </div>)}
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
                    <input ref={filepickerRef}  onChange={addImageToPost} type='file' hidden />
                    </div>
                   
                    {/* emoji */}
                    <div className="emoji">
                    <FaRegGrinAlt style={{color:'orange',fontSize:'24px'}}/>
                    <span>emoji</span>
                    </div>
                </div>
            </div> 
            <Posts /> 
                 

        </div>
    )
}

export default Mainfeeds
