import React from 'react';
import './HomePage.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>Hi, I'm Gaurav. I'm a Software Engineer</p>
      <a 
        href="https://drive.google.com/file/d/1yJY9qk93BZRjc2iR16gY_YxXq28NcFEF/view?usp=sharing" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <button type="button">
          <span>View My CV</span>
        </button>
      </a>
    </div>
  );
};

export default Home;
