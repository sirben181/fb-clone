import React from 'react'
import './login.css'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
const Login = () => {
    return (
        <div className="login">
           <FacebookRoundedIcon />
           <button className="btn" type="submit">SignIn</button>   
        </div>
    )
}

export default Login
