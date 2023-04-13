import { MdCancel } from "react-icons/md";
import { AiOutlineLogin } from "react-icons/ai";
import axios from "axios";
import { useRef, useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

export default function Login({showLogin,setShowLogin,setCurrentUser, myStorage,setUserDetails }) {
  const [error, setError] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      const res = await axios.post("/users/login", user);
      setUserDetails([res.data])

      setCurrentUser(res.data.name);
      myStorage.setItem('user', res.data);
      setShowLogin(false)
      setError(false);
      navigate("/")
    } catch (err) {
      setError(true);
    }
  };
  return (
<>
{
  showLogin ===true ? ( <div className="loginContainer">
  <div className="logo">
       <AiOutlineLogin className="logoIcon" />
       <span>Log In</span>
     </div>
     <form onSubmit={handleSubmit} className="login_form_data">
       <label >Email</label>
       <input type="email" autoFocus placeholder="email" ref={emailRef} />
       <label >Password</label>
       <input
         type="password"
         min="6"
         placeholder="password"
         ref={passwordRef}
       />
       <button className="loginBtn" type="submit">
         Login
       </button>
       {error && <span className="login_failure">Something went wrong!</span>}
     </form>
     <MdCancel className="loginCancel" onClick={() => setShowLogin(false)} />
     
 </div>) :(null)
}
   
    </> );
}