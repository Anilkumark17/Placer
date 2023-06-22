import React from 'react';
import "./contact.css";
import {FaTwitterSquare, FaInstagramSquare, FaLinkedin, FaFacebookSquare} from "react-icons/fa";

const Contact = () => {
  return (
    <>
    <div className='contact-container'>
    <div className='icons'>
        <FaLinkedin/>
        <FaFacebookSquare/>
        <FaInstagramSquare/>
        <FaTwitterSquare/>
    </div>
    <p className='span-item'>Terms and Condtions . Privacy Policy</p>
    </div>
    </>
  )
}

export default Contact;