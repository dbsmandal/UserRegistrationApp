import React from 'react';
import { Link } from 'react-router-dom';
import {BsFillPersonCheckFill} from "react-icons/bs"
import "./Popup.css"

const Popup = () => {
    return (
        <div>
            <div id='card' class="animated fadeIn">
                <div id='upper-side'>
                    <BsFillPersonCheckFill class="icons"/>
                    {/* <i class="fa fa-check"></i> */}
                    <h3 id='status'> Success </h3>
                </div>
                <div id='lower-side'>
                    <p id='message'>
                        Congratulations, your account has been successfully created.
                    </p>
                    <Link id="contBtn" to="/login">Continue</Link>
                </div>
            </div>
        </div>
    )
}

export default Popup
