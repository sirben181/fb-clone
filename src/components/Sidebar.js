import React from 'react'
import './sidebar.css'
import Avatar from '@mui/material/Avatar';
import { useStateValue } from './StateProvider';
import friends from '../images/friends.png'
import groups from '../images/groups.png'
import watch from '../images/watch.png'
import memory from '../images/memory.png'


const Sidebar = () => {
    const [{user},dispatch]=useStateValue([])
    return (
        <div className="sidebar_container">
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
                 <img src={groups} />
                 <p className="grouptext">Groups</p>
             </div>
             {/* marketplace */}
             <div className="marketplace">
                 <img src={store}/>
                 <p className="store">marketplace</p>
             </div>
             {/* watch and video icon */}
             <div className="watch">
                 <img src={watch}/>
                 <p className="video">Watch</p>
             </div>
             {/* memories */}
             <div className="memories">
                 <img src={memory}/>
                 <p className="memorytext">Memories</p>
             </div>
             <div className="seemore">
                 <img 
             </div>
             {/* caretdown /seemore */}
            
            {/* <Shortcuts /> */}
             {/* image and chuka university */}
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
