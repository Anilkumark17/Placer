import React, { useState } from "react";
import "./home.css";

import img from "../assests/world.png";
import Login from "../Login/Login";
import Register from "../Register/Register";

const Home = () => {
    const [openModal, setOpenModal] = useState(false);
    const [showRegistration, setShowRegistration] = useState(false);

    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         setOpenModal(true);
    //     }, 10000);
    //     return () => clearTimeout(timeout);
    // }, []);

    const handleLoginClick = () => {
        setOpenModal(true);
        setShowRegistration(false);
    };

    // const handleRegistrationClick = () => {
    //     setShowRegistration(true);
    //     setOpenModal(false);
    // };

    return (
        <>
            <div className="home-container">
                {openModal && <div className="modal-background"></div>}
                <div
                    className={`home-text-container ${openModal ? "blur" : ""}`}
                >
                    <div>
                        {openModal && (
                            <div className="modal">
                                {showRegistration ? (
                                    <Register />
                                ) : (
                                    <Login setOpenModal={setOpenModal} />
                                )}
                            </div>
                        )}
                        <h1 className="home-text">
                            Discover{" "}
                            <strong className="home-highlet">
                                Endless Opportunities
                            </strong>{" "}
                            with Placer: Where Students Thrive and{" "}
                            <strong className="home-highlet">
                                Alumni Guide
                            </strong>
                        </h1>
                        <div>
                            <button
                                className={`home-button ${
                                    openModal ? "active" : ""
                                }`}
                                onClick={handleLoginClick}
                            >
                                Login now
                            </button>
                            {/* <button
                                className="home-button"
                                onClick={handleRegistrationClick}
                            >
                                Register now
                            </button> */}
                        </div>
                    </div>
                    <div>
                        <img src={img} alt="" className="home-hero" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
