import React from "react";
import "./Project.css";

function Project({
  title,
  description,
  technologies,
  imageUrl,
  deployedLink,
  githubLink,
}) {
  return (
    <div className="project-container">
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">
        <img className="project-image" src={imageUrl} alt={title} />
      </a>

      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Technologies used: {technologies}</p>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
      </div>
    </div>
  );
}

export default Project;
