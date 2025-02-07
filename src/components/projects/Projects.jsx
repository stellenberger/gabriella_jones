import React, { useState } from "react";
import classes from "./Project.module.scss";
import Unlove from "./Unlove.tsx";

const Project = () => {
  const [project, setProject] = useState("");

  const projects = [
    { id: 1, project: "[UN]Love", accessor: "unlove" },
    { id: 1, project: "Inner Noise", accessor: "inner_noise" },
    { id: 2, project: "Freude", accessor: "freude" },
  ];

  const handleProjectClick = (project) => {
    setProject(project);
  };

  const renderProject = () => {
    switch (project) {
      case "unlove":
        return <Unlove />;
      default:
        return null;
    }
  };

  return (
    <div className={classes.projectContainer}>
      <div className={classes.projectNavigator}>{renderProject()}</div>
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
