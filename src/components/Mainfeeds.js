import React from 'react'
import './mainfeeds.css';
import Avatar from '@mui/material/Avatar'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
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
                    <Avatar src="" alt="" />
                    <input type="text" placeholder="whats are u thing ben" />
                    <button type="submit" hidden> submit</button>
                </form>
                <div className="inputposticons">
                    {/* video */}
                    {/* photo */}
                    {/* emoji */}
                </div>

            </div>

            {/* <Posts /> */}
            
        </div>
    )
}

export default Mainfeeds
