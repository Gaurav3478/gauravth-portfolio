import React from 'react';
import './EducationExperience.css';

const EducationExperience = ({ title, description, grade, fromYear, toYear }) => {
  return (
    <div className="education-experience">
      <h3 className="experience-title">{title}</h3>
      <p className="experience-timeline">
        {fromYear} – {toYear || "Present"}
      </p>
      <p className="experience-description">{description}</p>
      {grade && <p className="experience-grade"><strong>Grade:</strong> {grade}</p>}
    </div>
  );
};

export default EducationExperience;
