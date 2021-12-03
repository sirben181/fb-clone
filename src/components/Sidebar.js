import React from 'react'
import './sidebar.css'
import Avatar from '@mui/material/Avatar';
import { useStateValue } from './StateProvider';
import friends from '../images/friends.png'
import groups from '../images/groups.png'
import store from '../images/store.png'
import watch from '../images/watch.png'
import memory from '../images/memory.png'
import {FaAngleDown} from 'react-icons/fa'


const Sidebar = () => {
    const [{user},dispatch]=useStateValue([])
    return (
        <div className="sidebar_container">
            <div className="sidebar_menu">
             {/* avatar and username */}
             <div className="profile">
                 <Avatar src={user.photoURL}/>
                 <p className="username">{user.displayName}</p>
             </div>
             {/* friends and icon */}
             <div className="friends">
               <img src={friends} alt=""/>
                 <p className="friendtext">Friends</p>
             </div>
             {/* groups */}
             <div className="groups">
                 <img src={groups} alt=""/>
                 <p className="grouptext">Groups</p>
             </div>
             {/* marketplace */}
             <div className="marketplace">
                 <img src={store} alt=""/>
                 <p className="storetext">marketplace</p>
             </div>
             {/* watch and video icon */}
             <div className="watch">
                 <img src={watch} alt=""/>
                 <p className="videotext">Watch</p>
             </div>
             {/* memories */}
             <div className="memories">
                 <img src={memory}alt=""/>
                 <p className="memorytext">Memories</p>
             </div>
             {/* caretdown /seemore */}
             <div className="seemore">
                 <FaAngleDown/>
                 <p className="seemore">See more</p>
             </div>
            </div>
             {/* <Shortcuts /> */}
            <div className="groups_shortcuts">
                  {/* image and chuka university */}
                  <div className='chukauniversity'>
                      <img src='' alt=""/>
                      <h5 className="group_chuka">Chuka university live</h5>
                  </div>
                  <div className="familiamatangazo">
                      <img src=''/>
                      <h5 className="group_familia">Familia ya Matangazo ya mpira redio Jambo live</h5>
                  </div>
                  <div className="WarrenBuffet">
                      <img src='' alt=""/>
                      <h5 className="group_warren">Warren Buffet:Great Leader</h5>
                  </div>
                  <div classname="reactjsdev">
                      <img src=''alt=""/>
                      <h5 className="group_reactjs">React Js Developers</h5>
                  </div>
                  <div className="thelanguage">
                      <img src='' alt=""/>
                      <h5 className="group_thelanguage">
                          The Language Tutor-Spanish
                      </h5>
                  </div>
                  </div>
                  <div className="footer">
                      <small>Privacy . Terms .Advertising .Ad choices .cookies .More .Meta &copy; 2021</small>
                  </div>
             {/* image and familia ya matangazo ya mpira redio jambo live */}
             {/* warren buffet :great leader */}
             {/* React js developers */}
             {/* The language tutor-spanish */}
              {/* footer-privacy terms.advertising
              .ad choicces cookies more .meta copyright 2021 */}
           
           
           
            
        </div>
    )
}

export default Sidebar
