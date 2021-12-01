
import React from 'react'
import './body.css'
import Sidebar from './Sidebar';
import Contacts from './Contacts';
import Mainfeeds from './Mainfeeds';

const Body = () => {
    return (
        <div className="body_container">
            <Sidebar />
            <Mainfeeds />
            <Contacts />
        </div>
    )
}

export default Body
