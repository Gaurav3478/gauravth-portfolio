import React from 'react';
import './EducationExperience.css';

const EducationExperience = ({ 
  title, 
  points = [], 
  grade, 
  fromYear, 
  toYear, 
  logo 
}) => {
  return (
    <div className="education-experience">
      {logo && <img src={require(`../../../public/assets/images/${logo}.png`)} alt={`${title} logo`} className="experience-logo" />}
      <h3 className="experience-title">{title}</h3> 
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
      {grade && <p className="experience-grade"><strong>Grade:</strong> {grade}</p>}
    </div>
  );
};

export default EducationExperience;
