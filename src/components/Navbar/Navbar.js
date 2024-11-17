// src/pages/Home.js
import React from 'react';
import './Navbar.css';

const Home = () => {
    return (
        <div class="navbar">
            <a href="#home">Home</a>
            <div class="dropdown">
                <button class="dropbtn">About
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="#">Experience</a>
                    <a href="#">Skills</a>
                    <a href="#">Education</a>
                </div>
            </div>
            <a href="#projects">Projects</a>
            <a href="#news">Contact Us</a>
        </div>
    );
};

export default Home;
