import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [showMediaIcon, setShowMediaIcon] = useState(false);

    return (
        <nav className="main-nav">
            <div className="logo">
                <h2>Placer</h2>
            </div>
            <div
                className={
                    showMediaIcon ? "menu-link mobile-menu-link" : "menu-link"
                }
            >
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/courses">Courses</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="hamburger-menu">
                <GiHamburgerMenu
                    onClick={() => setShowMediaIcon(!showMediaIcon)}
                />
            </div>
        </nav>
    );
};

export default Navbar;
