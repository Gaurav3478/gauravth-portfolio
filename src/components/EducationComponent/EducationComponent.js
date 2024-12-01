import React from "react";
import "./EducationComponent.css";

const EducationComponent = ({
  title,
  points = [],
  grade,
  fromYear,
  toYear,
  logo,
}) => {
  return (
    <div className="education-experience">
      <div className="education-header-container">
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
      {grade && (
        <p className="experience-grade">
          <strong>Grade:</strong> {grade}
        </p>
      )}
    </div>
  );
};

export default EducationComponent;
