import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Install react-icons if you haven't already
import "./ProjectComponent.css";

const ProjectComponent = ({ title, points = [], project_url }) => {
  return (
    <div className="project-experience">
      <div className="project-content">
        <div className="project-header-container">
          <h3 className="project-title">{title}</h3>
        </div>
        {points.length > 0 && (
          <ul className="project-points">
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="project-arrow">
        <a href={project_url} target="_blank" rel="noopener noreferrer">
          <FaArrowRight size={32} />
        </a>
      </div>
    </div>
  );
};

export default ProjectComponent;
