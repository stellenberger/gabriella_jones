import React from "react";
import classes from "./About.module.scss";
import collaborations from "../../information/collaborations.json";
import {
  porsche,
  porscheLogo,
  gherkin,
  gherkinLogo,
  wallace,
  wallaceLogo,
  connaught,
  connaughtLogo,
  chiswick,
  chiswickLogo,
  gucci,
  gucciLogo,
  spencer,
  spencerLogo,
  afl,
  aflLogo,
} from "../../media/gabriella-jones-photos-2025/collaborations/index.ts";

export const Collaborations = () => {
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
