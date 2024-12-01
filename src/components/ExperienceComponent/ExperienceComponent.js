import React from "react";
import "./ExperienceComponent.css";

const ExperienceComponent = ({
  title,
  points = [],
  fromYear,
  toYear,
  logo,
}) => {
  return (
    <div className="experience-experience">
      <div className="experience-header-container">
        <h3 className="experience-title">{title}</h3>{" "}
        {logo && (
          <img
            src={require(`../../../public/assets/images/${logo}.png`)}
            alt={`${title} logo`}
            className="experience-logo"
          />
        )}
      </div>
      <p className="experience-timeline">
        {fromYear} – {toYear || "Present"}
      </p>
      {points.length > 0 && (
        <ul className="experience-points">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExperienceComponent;
