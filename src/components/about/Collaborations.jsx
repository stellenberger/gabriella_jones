import React from "react";
import classes from "./About.module.scss";
import collaborations from "../../information/collaborations.json";

const Collaborations = () => {
  return (
    <div>
      <p className={classes.aboutBio}>
        {collaborations.collaborations.map((section) => {
          return (
            <span>
              {section.paragraph}
              <br />
              <br />
            </span>
          );
        })}
      </p>
    </div>
  );
};

export default Collaborations;
