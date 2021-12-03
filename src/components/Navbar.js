import React from 'react'
import "./navbar.css"
import HomeIcon from '@mui/icons-material/Home'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import SearchIcon from '@mui/icons-material/Search';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StoreIcon from '@mui/icons-material/Store';
import GroupIcon from '@mui/icons-material/Group';
import SmallAvatar from '@mui/material/Avatar';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {FaFacebookMessenger} from 'react-icons/fa'
import {FaCaretDown}  from "react-icons/fa"
import { useStateValue } from './StateProvider';
 
const Navbar = () => {
    const [{user},dispatch]=useStateValue()
    return (
        <div className='navbar_container'>
            <div className="searchbar">
              <FacebookRoundedIcon  className="fb_icon"
              style={{fontSize:'70px'}}/>
              <div className="searchbar">
                  <input className="inputSearch"  placeholder="Search"/>
                  <SearchIcon  className="search_icon"/>
                </div>
            </div>
            <div className="menu">   
             <HomeIcon className="home central-menu active"
              style={{fontSize:'30px',color:'blue'}} />
             < OndemandVideoIcon  className="video central-menu" style={{fontSize:'30px'}}/>
             <StoreIcon  className="store central-menu" style={{fontSize:'30px'}}/>
             <SmallAvatar className="group_avatar central-menu">
                 <GroupIcon />
            </SmallAvatar>
            <SportsEsportsIcon  className="gaming central-menu" style={{fontSize:'30px'}}/>
            </div>
            <div className="submenu">
              <SmallAvatar className="submenu_icon avatar_sidebar" src={user.photoURL} style={{fontSize:'23px'}}/>
              <AppsIcon className=" submenu_icon menu_small" style={{fontSize:'23px'}}/>
              <FaFacebookMessenger className=" submenu_icon messenger" style={{fontSize:'23px'}}/>
              <NotificationsIcon className="submenu_icon notifications" style={{fontSize:'23px'}}/>
              <FaCaretDown className=" submenu_icon account" style={{fontSize:'23px'}}/>
            </div>
        </div>
    )
}

export default Navbar
