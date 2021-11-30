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
 
const Navbar = () => {
    return (
        <div className='navbar_container'>
            <div className="searchbar">
              <FacebookRoundedIcon  className="fb_icon"
              />
              <div className="searchbar">
                  <input className="inputSearch"  placeholder="Search"/>
                  <SearchIcon  className="search_icon"/>
                </div>
            </div>
            <div className="menu">   
             <HomeIcon className="home central-menu" />
             < OndemandVideoIcon  className="video central-menu"/>
             <StoreIcon  className="store central-menu"/>
             <SmallAvatar className="group_avatar central-menu">
                 <GroupIcon />
            </SmallAvatar>
            <SportsEsportsIcon  className="gaming central-menu"/>
            </div>
            <div className="submenu">
              <SmallAvatar className="submenu_icon avatar_sidebar" />
              <AppsIcon className=" submenu_icon menu_small" />
              <FaFacebookMessenger className=" submenu_icon messenger"/>
              <NotificationsIcon className="submenu_icon notifications"/>
              <FaCaretDown className=" submenu_icon account"/>
            </div>
        </div>
    )
}

export default Navbar
