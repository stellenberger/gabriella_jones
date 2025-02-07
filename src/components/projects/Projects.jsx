import React, { useState } from "react";
import classes from "./Project.module.scss";

const Project = () => {
  const [project, setProject] = useState("");

  const projects = [
    { id: 1, project: "[UN]Love" },
    { id: 1, project: "Inner Noise" },
    { id: 2, project: "Freude" },
  ];

  const handleProjectClick = (project) => {
    setProject(project);
  };

  return (
    <div className={classes.projectContainer}>
      <div className={classes.projectNavigator}>
        {projects &&
          projects.map((project) => {
            return (
              <p
                className={classes.project}
                id={project.id}
                onClick={() => handleProjectClick(project.project)}
              >
                {project.project}
              </p>
            );
          })}
      </div>
      <p>Projects</p>
    </div>
  );
};

export default Project;
