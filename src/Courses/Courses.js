import React from "react";
import "./courses.css";

const Courses = () => {
    const course = [
        {
            key: 1,
            des: "SEO Marketing",
            img: "../assests/seoMarketing.png",
        },
        {
            key: 2,
            des: "Email Marketing",
            img: "../assests/email.png",
        },
        {
            key: 3,
            des: "Growth Hacking",
            img: "../assests/Hacking.png",
        },
        {
            key: 4,
            des: "Automation SetUp",
            img: "../assests/automation.png",
        },
    ];
    const card_items = course.map((item) => {
        return (
            <div className="card-item">
                <img src={item.img} alt="" className="card-img" />
                <p>{item.des}</p>
            </div>
        );
    });
    return (
        <>
            <div>
                <div className="courses-text-container">
                    <p className="courses-text">Courses</p>
                    <h3>What we Offer</h3>
                    <p>
                        we help students to learn the technologies of industrial
                        level{" "}
                    </p>
                </div>
                <section className="card">{card_items}</section>
                <div className="help">
                    <img src={require("../assests/helpCon.png")} alt="" />
                </div>
            </div>
        </>
    );
};

export default Courses;
