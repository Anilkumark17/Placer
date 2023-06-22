import React from "react";
import "./about.css";

const About = () => {
    return (
        <>
            <div className="about-container">
                <div className="about-text-container">
                    <img
                        src={require("../assests/Aboutimg.png")}
                        alt=""
                        className="about-img"
                    />
                    <div className="about-text">
                        <h2 className="about-heading">Placer</h2>

                        <p className="about-text-main">
                            Placer, initiated by Ignite Core club members, is a
                            dedicated platform aimed at enhancing placements in
                            colleges. With strong support from our alumni, we
                            strive to bridge the gap between students and
                            prospective employers, enabling students to succeed
                            in their chosen careers. Join us on this journey
                            towards creating endless opportunities for students
                            and guiding them towards a thriving future.
                        </p>
                    </div>
                </div>
                <h2 className="h2">
                    “Elevate your Future <br />
                    to New heights.”
                </h2>
            </div>
        </>
    );
};

export default About;
