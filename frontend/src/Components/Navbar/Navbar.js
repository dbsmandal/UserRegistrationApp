import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar({setShowLogin,setShowRegister,currentUser,setCurrentUser,myStorage}) {
 const handleLogout = () => {
        setCurrentUser(null);
        myStorage.clear();
    };
    return (
        <div className="navbar">
            <div className="navbar_container">
                <div className="navbar_container_logo">
                    <img className="logo" src="https://eternalight.in/img/logo-dark.png" alt="" />
                </div>
                <div className="navbar_container_buttons">
                    {currentUser !== null ?
                        (
                            <button className="button logout" onClick={handleLogout}>Log out</button>
                        )
                        :
                        (
                            <div className="buttons">
                                <Link to="/login">
                                <button className="button login" onClick={()=>setShowLogin(true)}>Log in</button>

                                </Link>
                                <Link to="/register">

                                <button className="button register"
                                onClick={()=>setShowRegister(true)}>Register</button>
                                </Link>

                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    );
}

export default Navbar;