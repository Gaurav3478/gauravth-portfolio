import React, { useEffect, useState } from "react";
import "./InitialPage.css";

const InitialPage = ({ onTransitionEnd }) => {
  const [displayText, setDisplayText] = useState(""); // Text to display progressively
  const fullText = "Gaurav Thakur"; // Full name to display
  const typingSpeed = 150; // Speed of typing effect in milliseconds

  useEffect(() => {
    let charIndex = -1;

    const typeInterval = setInterval(() => {
      if (charIndex < 12) {
        charIndex++;
        setDisplayText((prev) => prev + fullText[charIndex]);
      } else {
        clearInterval(typeInterval); // Stop interval once all characters are added
      }
    }, typingSpeed);
  
    const fadeOutTimer = setTimeout(() => onTransitionEnd(), fullText.length * typingSpeed + 500);
  
    return () => {
      clearInterval(typeInterval); // Clear interval on component unmount
      clearTimeout(fadeOutTimer); // Clear timeout on component unmount
    };
  }, [fullText, typingSpeed, onTransitionEnd]);  

  return (
    <div className="initial-page">
      <div className="content">
        <img
          src="../../../assets/images/gaurav-image.jpeg" // Replace with your image path
          alt="Gaurav Thakur"
          className="photo"
        />
        <div className="typewriter">
          <span>{displayText}</span>
          <span className="cursor">|</span>
        </div>
      </div>
    </div>
  );
};

export default InitialPage;
