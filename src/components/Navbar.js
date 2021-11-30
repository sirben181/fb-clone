import React from 'react'
import { AccessAlarm} from '@mui/icons-material';
import {ThreeDRotation } from  '@mui/icons-material';

const Navbar = () => {
    return (
        <div className='navbar_container'>
            <div className="searchbar">
              
            </div>
            <div className="menu">   
              <AccessAlarm />
              <ThreeDRotation />  
            </div>
            <div className="submenu">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            {/* this is actually not a component but they are just arranged flex  */}
            {/* <Searchbar /> */} 

            {/* <MainBar /> */}
            {/* <Submenu/> */}
        </div>
    )
}

export default Navbar
