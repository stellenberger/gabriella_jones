import React from "react";
import classes from "./About.module.scss";
import collaborations from "../../information/collaborations.json";
import porsche from "../../media/gabriella-jones-photos-2025/collaborations/porsche.jpg";
import porscheLogo from "../../media/gabriella-jones-photos-2025/collaborations/porscheLogo.png";
import gherkin from "../../media/gabriella-jones-photos-2025/collaborations/gherkin.jpg";
import gherkinLogo from "../../media/gabriella-jones-photos-2025/collaborations/gherkinLogo.png";
import wallace from "../../media/gabriella-jones-photos-2025/collaborations/wallace.jpg";
import wallaceLogo from "../../media/gabriella-jones-photos-2025/collaborations/wallaceLogo.png";
import connaught from "../../media/gabriella-jones-photos-2025/collaborations/connaught.jpg";
import connaughtLogo from "../../media/gabriella-jones-photos-2025/collaborations/connaughtLogo.png";
import chiswick from "../../media/gabriella-jones-photos-2025/collaborations/chiswick.jpg";
import chiswickLogo from "../../media/gabriella-jones-photos-2025/collaborations/chiswickLogo.png";
import gucci from "../../media/gabriella-jones-photos-2025/collaborations/gucci.jpg";
import gucciLogo from "../../media/gabriella-jones-photos-2025/collaborations/gucciLogo.png";
import spencer from "../../media/gabriella-jones-photos-2025/collaborations/spencer.jpg";
import spencerLogo from "../../media/gabriella-jones-photos-2025/collaborations/spencerLogo.svg";
import afl from "../../media/gabriella-jones-photos-2025/collaborations/afl.jpg";
import aflLogo from "../../media/gabriella-jones-photos-2025/collaborations/aflLogo.png";

const Collaborations = () => {
  const collabs = [
    {
      image: porsche,
      imageLogo: porscheLogo,
      alt: "porsche Logo",
    },
    {
      image: gherkin,
      imageLogo: gherkinLogo,
      alt: "gherkin Logo",
    },
    {
      image: wallace,
      imageLogo: wallaceLogo,
      alt: "wallace Logo",
    },
    {
      image: connaught,
      imageLogo: connaughtLogo,
      alt: "connaught Logo",
    },
    {
      image: chiswick,
      imageLogo: chiswickLogo,
      alt: "chiswick Logo",
    },
    {
      image: gucci,
      imageLogo: gucciLogo,
      alt: "gucci Logo",
    },
    {
      image: spencer,
      imageLogo: spencerLogo,
      alt: "spencer Logo",
    },
    {
      image: afl,
      imageLogo: aflLogo,
      alt: "afl Logo",
    },
  ];

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

      <div className={classes.gridContainer}>
        {collabs.map((collab) => {
          return (
            <div class={classes.gridItem}>
              <p>
                <img
                  src={collab.image}
                  alt={collab.alt}
                  className={classes.image}
                />{" "}
                <br />
                <img
                  src={collab.imageLogo}
                  alt={collab.alt}
                  className={classes.logo}
                />
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Collaborations;
