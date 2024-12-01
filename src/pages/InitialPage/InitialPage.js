import React, { useEffect, useState } from "react";
import "./InitialPage.css"; // Import the CSS file for styling

const InitialPage = ({ onTransitionEnd }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Trigger fade-out after 4 seconds
    const timer = setTimeout(() => setFadeOut(true), 4000);

    // Call the callback function after 5 seconds to indicate the transition is complete
    const endTimer = setTimeout(() => {
      onTransitionEnd();
    }, 3500);

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
        <h1 className="name">Gaurav Thakur</h1>
      </div>
    </div>
  );
};

export default InitialPage;
