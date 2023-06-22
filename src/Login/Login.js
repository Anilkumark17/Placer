import React, { useState } from "react";
import "./login.css";
import Register from "../Register/Register";

const Login = ({ closeModal }) => {
    const [openRegister, setOpenRegister] = useState(false);

    const handleRegisterClick = () => {
        setOpenRegister(true);
    };

    return (
        <>
            {openRegister ? (
                <Register />
            ) : (
                <div className="login-container">
                    <img
                        src={require("../assests/login.jpg")}
                        alt=""
                        className="login-img"
                    />
                    <div className="login-box">
                        <h2 className="login">LOGIN</h2>
                        <hr className="hr" />
                        <div>
                            <input type="email" placeholder="Email id" />
                            <input type="password" placeholder="password" />
                            <p>forget password?</p>
                        </div>
                        <button
                            className="login-btn"
                            onClick={() => closeModal(false)}
                        >
                            Login
                        </button>
                        <p>
                            Don't have an account?{" "}
                            <span
                                className="register"
                                onClick={handleRegisterClick}
                            >
                                Register
                            </span>
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Login;
