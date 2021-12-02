import React from 'react'
import './login.css'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
const Login = ({signIn}) => {
    return (
        <div className="login_container">
            <div className="login">
           <FacebookRoundedIcon style={{fontSize:'150px',
        color:'blue',
        }}/>
           <button className="btn" type="submit" onClick={signIn}>SignIn</button>   
        </div>
        </div>
    )
}

export default Login
