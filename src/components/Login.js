import React from 'react'
import './login.css'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import {auth,provider} from './firebase'
import {signInWithPopup} from "firebase/auth";
import {initialState,actionTypes} from './reducer'
import { useStateValue } from './StateProvider';
const Login = () => {
    const [state,dispatch]=useStateValue()
    const signIn=()=>{
        signInWithPopup(auth,provider)
        .then((result)=>{
          dispatch({
              type:actionTypes.SET_USER,
              user:result.user
          })
           //   console.log(result)
        //   console.log(result.user.displayName)
        //   console.log(result.user.email)
        //   console.log(result.user.photoURL)
        //   // The signed-in user info.
        //   const user = result.user;
        //   setUser(user)
       
            }).catch((error)=>
            alert(error.message))
       
        }
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
