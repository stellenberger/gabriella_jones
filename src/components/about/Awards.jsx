import React from "react";
import classes from "./About.module.scss";
import awardsInformation from "../../information/awards.json";

const Awards = () => {
  return (
    <div className={classes.awardsContainer}>
      <span>
        <p className={classes.awardsTitle}>
          <b>Awards</b>
        </p>
        {awardsInformation.awards.map((award) => {
          return <p>{award.award}</p>;
        })}
      </span>
    </div>
  );
};

export default Awards;
