import React from "react";
import "./register.css";
// import img from "../assests/loginimg.png";

const Register = () => {
    return (
        <div className="registration-container">
            {/* <img src={img} alt="" className='registration-img'/> */}
            <div className="box">
                <h2 className="heading">REGISTRATION</h2>
                <hr />
                <div>
                    <input type="text" placeholder="Username" />
                    <input type="number" placeholder="Roll number" />
                    <input type="text" placeholder="Branch" />
                    <input type="email" placeholder="email id" />
                    <input type="password" placeholder="password" />
                </div>
                <button className="register-btn">Register</button>
                <p>
                    Already have an account?<span className="login">Login</span>
                </p>
            </div>
        </div>
    );
};

export default Register;
