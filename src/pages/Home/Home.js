// src/pages/Home.js
import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="home">
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, I'm Gaurav. I'm a Software Engineer</p>
        <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
          Learn More About Me
        </button>
      </div></div>
  );
};

export default Home;
