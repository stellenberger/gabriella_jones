import React from "react";
import classes from "./About.module.scss";
import bio from "../../media/gabriella-jones-photos-2025/media-elly-lucas/bio.jpg";
import biography from "../../information/biography.json";
import Awards from "./Awards";

const Biography = () => {
  return (
    <div>
      <img src={bio} alt="gabriella jones" className={classes.aboutPhoto} />
      <p className={classes.aboutBio}>
        {biography.biography.map((section) => {
          return (
            <span>
              {section.paragraph}
              <br />
              <br />
            </span>
          );
        })}
      </p>
      <p>
        &copy; This information is copyrighted and cannot be used for programme
        notes or other publications without the artist's consent. Please contact
        Gabriella directly for relevant information.
      </p>
      <Awards />
    </div>
  );
};

export default Biography;
