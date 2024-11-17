// src/pages/Home.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div class="navbar">
            <div>
                <a href='/'>Portfolio</a>
            </div>
            <div className='navbar-section'>
                <NavLink to="/about" activeClassName="active">ABOUT</NavLink>
                <NavLink to="/education" activeClassName="active" >EDUCATION</NavLink>
                <NavLink to="/experience" activeClassName="active" >EXPERIENCE</NavLink>
                <NavLink to="/projects" activeClassName="active" >PROJECTS</NavLink>
                <NavLink to="/contact" activeClassName="active" >CONTACT</NavLink>
            </div></div>
    );
};

export default Navbar;
