// src/pages/Home.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div class="navbar">
            <a href="#home" className='home-section'>Home</a>
            <div class="dropdown">
                <button class="dropbtn">About
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="#">Experience</a>
                    <a href="#">Skills</a>
                    <a href="#">Education</a>
                    <a href="#">Projects</a>
                </div>
            </div>
            <a href="#news" className='contact-section'>Contact</a>
        </div>
    );
};

export default Navbar;
