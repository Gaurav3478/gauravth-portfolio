import React, { useEffect, useState } from "react";
import "./InitialPage.css"; // Import the CSS file for styling

const InitialPage = ({ onTransitionEnd }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Trigger fade-out after 4 seconds
    const timer = setTimeout(() => setFadeOut(true), 3000);

    // Call the callback function after 5 seconds to indicate the transition is complete
    const endTimer = setTimeout(() => {
      onTransitionEnd();
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(endTimer);
    };
  }, [onTransitionEnd]);

  return (
    <div className={`initial-page ${fadeOut ? "fade-out" : ""}`}>
      <div className="content">
        <img
          src="../../../assets/images/gaurav-image.jpeg" // Replace with your image path
          alt="Your Name"
          className="photo"
        />
        <div className="name-wrapper">
          <h1 className="first-name">Gaurav <span className="last-name">Thakur</span></h1>
        </div>
      </div>
    </div>
  );
};

export default InitialPage;
