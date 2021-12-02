
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCPXMBUgs0vYsnCBPaNtp8p3Z7PCZzUOmI",
    authDomain: "fb-react2.firebaseapp.com",
    projectId: "fb-react2",
    storageBucket: "fb-react2.appspot.com",
    messagingSenderId: "465563499300",
    appId: "1:465563499300:web:01ffa781da337575d311b1",
    measurementId: "G-NXWDSTS08J"
  };
const firebaseApp=initializeApp(firebaseConfig)
const auth=getAuth(firebaseApp)
const db=getFirestore()
const provider = new GoogleAuthProvider();
export {provider,auth}
  export default db;