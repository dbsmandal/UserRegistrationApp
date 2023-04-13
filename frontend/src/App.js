
import React,{useState} from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './Components/Login/LogIn';
import Navbar from './Components/Navbar/Navbar';
import Register from './Components/Register/Register';
import Home from './Pages/Home';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(true);
  const [userDetails,setUserDetails]=useState()
  const myStorage = window.localStorage;
  const [currentUser, setCurrentUser] = useState(myStorage.getItem("user"));
  console.log(myStorage.getItem("user"))
  return (
    <BrowserRouter>
    <Navbar setShowLogin={setShowLogin} setShowRegister={setShowRegister} currentUser={currentUser} setCurrentUser={setCurrentUser} myStorage={myStorage}/>
    <Routes>
      {
        currentUser &&  <Route exact path='/'  element={<Home userDetails={userDetails} />}/>
      }
      
      <Route  path='/login'  element={<Login showLogin={showLogin} setShowLogin={setShowLogin} setCurrentUser={setCurrentUser} myStorage={myStorage} setUserDetails={setUserDetails}/>}/>

      <Route  path='/register' element={<Register showRegister={showRegister} setShowRegister={setShowRegister}/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App;
