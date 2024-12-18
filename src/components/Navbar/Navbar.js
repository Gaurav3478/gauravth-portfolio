import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="portfolio-heading">
                <NavLink to="/" className="logo">
                    <span>P</span>
                    <span>O</span>
                    <span>R</span>
                    <span>T</span>
                    <span>F</span>
                    <span>O</span>
                    <span>L</span>
                    <span>I</span>
                    <span>O</span>
                </NavLink>
            </div>
            <div className="navbar-section">
                <NavLink to="/about" activeClassName="active">ABOUT</NavLink>
                <NavLink to="/education" activeClassName="active">EDUCATION</NavLink>
                <NavLink to="/experience" activeClassName="active">EXPERIENCE</NavLink>
                <NavLink to="/projects" activeClassName="active">PROJECTS</NavLink>
                <NavLink to="/contact" activeClassName="active">CONTACT</NavLink>
            </div>
        </div>
    );
};

export default Navbar;
