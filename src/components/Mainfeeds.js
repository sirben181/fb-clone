import React from 'react'
import './mainfeeds.css';
import Avatar from '@mui/material/Avatar'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import {FaVideo} from 'react-icons/fa'
import {FaRegGrinAlt} from 'react-icons/fa'
import {GrGallery} from 'react-icons/gr'
// import Status from './Status';
const Mainfeeds = () => {
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
                <form>
                    <Avatar src="" alt="" style={{marginRight:'10px'}} />
                    <input type="text" placeholder="whats are u thing ben" />
                    <button type="submit" hidden> submit</button>
                </form>
                <div className="inputposticons">
                    {/* video */}
                    <div className="video">
                    <FaVideo style={{color:'red',fontSize:'24px'}}/>
                    <span>Video</span>
                    </div>
                   
                    {/* photo */}
                    <div className="photo">
                    <GrGallery />
                    <span>Photo</span>
                    </div>
                   
                    {/* emoji */}
                    <div className="emoji">
                    <FaRegGrinAlt />
                    <span>emoji</span>
                    </div>
                   
                </div>

            </div>

            {/* <Posts /> */}
            
        </div>
    )
}

export default Mainfeeds
