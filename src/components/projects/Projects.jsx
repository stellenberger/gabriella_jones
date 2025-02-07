import React, { useState } from "react";
import classes from "./Project.module.scss";
import Unlove from "./Unlove.tsx";
import InnerNoise from "./InnerNoise.tsx";

const Project = () => {
  const [project, setProject] = useState("unlove");

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
      case "inner_noise":
        return <InnerNoise />;
      case "freude":
        return "Coming soon, autumn 2025.";
      default:
        return null;
    }
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
                onClick={() => handleProjectClick(project.accessor)}
              >
                {project.project}
              </p>
            );
          })}
      </div>
      <div className={classes.projectContent}>{renderProject()}</div>
    </div>
  );
};

export default Project;
