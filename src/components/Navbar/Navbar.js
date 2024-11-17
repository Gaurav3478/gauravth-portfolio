// src/pages/Home.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div class="navbar">
            <a href="/" className='home-section'>Home</a>
            <div class="dropdown">
                <button class="dropbtn">About
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="/experience">Experience</a>
                    <a href="/skills">Skills</a>
                    <a href="/education">Education</a>
                    <a href="/projects">Projects</a>
                </div>
            </div>
            <a href="/contact" className='contact-section'>Contact</a>
        </div>
    );
};

export default Navbar;
