import React from 'react'
import Avatar from '@mui/material/Avatar';
import './status.css'

const Status = () => {
    return (
        <div className="status">
            <div className="card" >
                <img  src="../images/code1.png" className="statusphoto" alt="" />
                {/* <Avatar  /> */}
                <p className="statusname">Benson</p>
            </div> 
        </div>
    )
}

export default Status
