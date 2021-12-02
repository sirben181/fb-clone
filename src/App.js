import {useState} from 'react';
import Body from './components/Body';
import Navbar from './components/Navbar'
import "./index.css";
import {auth,provider} from './components/firebase'
import {signInWithPopup} from "firebase/auth";


import Login from './components/Login'


function App() {
 const [user,setUser]=useState('')
    const signIn=()=>{
      signInWithPopup(auth,provider)
      .then((result=>{
        
        console.log(result)
        console.log(result.user.displayName)
        console.log(result.user.email)
        console.log(result.user.photoURL)

        
        // The signed-in user info.
        const user = result.user;
        setUser(user)
      }))
    }
  return (
    <div className="app">
      { !user ? 
      (<Login signIn={signIn}/>) :(
        <>
        <Navbar />
        <Body />
        </>
       )}
      
     
     
    </div>
  );
}

export default App;
