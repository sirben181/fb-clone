import Body from './components/Body';
import Navbar from './components/Navbar'
import "./index.css";
import { collection, addDoc } from "firebase/firestore"; 
import db from  './components/firebase';
import {auth,provider} from './components/firebase'

// import Login from './components/Login'


function App() {
  // const user=null
      const addPost=async ()=>{
      //
      }
  return (
    <div className="app">
      {/* !user ? (
      <Login />) :( */}
      
       <Navbar />
       <Body />
     
    </div>
  );
}

export default App;
