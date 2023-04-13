import { MdCancel } from "react-icons/md";
import { GiArchiveRegister } from "react-icons/gi";
import axios from "axios";
import { useRef, useState } from "react";
import "./register.css";

export default function Register({ showRegister, setShowRegister }) {
  const [success, setSuccess] = useState(false);
  // const [errMeasage,setErrMeasage]=useState()
  const [error, setError] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      await axios.post("/users/register", newUser);
      setError(false);
      setSuccess(true);
    } catch (err) {
      setError(true);
      // setErrMeasage(err)
    }
  };
  // console.log("err msg", errMeasage)
  return (
    <>
      {
        showRegister === true ? (<div className="registerContainer">
          <div className="logo">
            <GiArchiveRegister className="logoIcon" />
            <span>Register</span>
          </div>
          <form onSubmit={handleSubmit} className="register_form_data">
            <label >Name</label>
            <input autoFocus placeholder="name" ref={nameRef} />
            <label >Email</label>

            <input type="email" placeholder="email" ref={emailRef} />
            <label >Password</label>

            <input
              type="password"
              min="6"
              placeholder="password"
              ref={passwordRef}
            />
            <button className="registerBtn" type="submit">
              Register
            </button>
            {success && (
              <span className="success">Register Successfull. You can login now!</span>
            )}
            {error && <span className="failure">Something went wrong!</span>}
          </form>
          <MdCancel
            className="registerCancel"
            onClick={() => setShowRegister(false)}
          />
        </div>
        ) : (null)
      }

    </>

  );
}


