import React from 'react';
import './HomePage.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>Hi, I'm Gaurav. I'm a Software Engineer</p>
      <a href="../../../assets/files/Arrabelli_Varsha_Reddy_Resume_2024.pdf" download>
        <button type="submit"><span>Download My CV</span><img src="../../../assets/images/Download.png"
          alt="Download CV"></img></button>
      </a>
    </div>
  );
};

export default Home;