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
    <div className="education-education">
      <div className="education-header-container">
        <h3 className="education-title">{title}</h3>{" "}
        {logo && (
          <img
            src={require(`../../../public/assets/images/${logo}.png`)}
            alt={`${title} logo`}
            className="education-logo"
          />
        )}
      </div>
      <p className="education-timeline">
        {fromYear} – {toYear || "Present"}
      </p>
      {points.length > 0 && (
        <ul className="education-points">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      )}
      {grade && (
        <p className="education-grade">
          <strong>Grade:</strong> {grade}
        </p>
      )}
    </div>
  );
};

export default EducationComponent;
