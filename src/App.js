import Body from './components/Body';
import Navbar from './components/Navbar'
import "./index.css";
import { collection, addDoc } from "firebase/firestore"; 
import db from  './components/firebase';
import {auth,provider} from './components/firebase'
import { getAuth,signInWithPopup,GoogleAuthProvider } from "firebase/auth";


import Login from './components/Login'


function App() {
  const user=''
    const signIn=()=>{
      signInWithPopup(auth,provider)
      .then((result=>{
        
        console.log(result)
        console.log(result.user.displayName)
        console.log(result.user.email)
        console.log(result.user.photoURL)

        
        // The signed-in user info.
        // const user = result.user;
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
