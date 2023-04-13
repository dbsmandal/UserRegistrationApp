import React from 'react'
import Popup from '../Components/SuccesfulPopup/Popup';

const Home = ({ userDetails }) => {
  console.log("home page", userDetails,);
  return (
    <div>
     <Popup/>
    </div>
  )
}

export default Home
