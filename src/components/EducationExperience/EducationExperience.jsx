import React from 'react';
import './EducationExperience.css';

const EducationExperience = ({ title, description, GPA }) => {
  return (
    <div className="education-experience">
      <h3 className="experience-title">{title}</h3>
      <p className="experience-description">{description}</p>
      {GPA && <p className="experience-gpa"><strong>GPA:</strong> {GPA}</p>}
    </div>
  );
};

export default EducationExperience;
