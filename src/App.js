import {useState} from 'react';
import Body from './components/Body';
import Navbar from './components/Navbar'
import "./index.css";
// import reducer from './components/reducer'
import Login from './components/Login'
import { useStateValue } from './components/StateProvider';


function App() {
  const [{user},dispatch]=useStateValue()

  return (
    <div className="app">
      { !user ? 
      (<Login />) :(
        <>
        <Navbar />
        <Body />
        </>
       )}
      
     
     
    </div>
  );
}

export default App;
