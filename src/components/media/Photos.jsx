import React from "react";
import classes from "./Media.module.scss";
import { image1, image3, image5, image6 } from "../../media/photos";
import {
  Image1,
  Image2,
  Image3,
  Image4,
} from "../../media/gabriella-jones-photos-2025/media-elly-lucas/index.js";
import {
  Nat1,
  Nat2,
  Nat3,
  Nat4,
} from "../../media/gabriella-jones-photos-2025/nat-portrait/index.js";
import {
  NatH1,
  NatH2,
  NatH3,
  NatH4,
} from "../../media/gabriella-jones-photos-2025/nat-history/index.js";

const Photos = () => {
  const ellyLucasPhotos = [Image1, Image2, Image3, Image4];
  const stephanEllenbergerPhotos = [image5, image6, image1, image3];
  const livePortraitGallery = [Nat1, Nat3, Nat2, Nat4];
  const liveNaturalHistory = [NatH1, NatH3, NatH2, NatH4];

  return (
    <div>
      <h1 className={classes.mediaTitle}>Publicity Shots</h1>
      <p>By Elly Lucas</p>
      <div class={classes.gridContainer}>
        {ellyLucasPhotos.map((photo, index) => (
          <div class={classes.gridItem}>
            <img
              key={index}
              src={photo}
              alt={`Gabriella at the harp ${index + 1}`}
              className={classes.image}
            />
          </div>
        ))}
      </div>
      <h1 className={classes.mediaTitle}>Publicity Shots</h1>
      <p>By Stephan Ellenberger</p>
      <div class={classes.gridContainer}>
        {stephanEllenbergerPhotos.map((photo, index) => (
          <div class={classes.gridItem}>
            <img
              key={index}
              src={photo}
              alt={`Gabriella at the harp ${index + 1}`}
              className={classes.image}
            />
          </div>
        ))}
      </div>
      <h1 className={classes.mediaTitle}>Live</h1>
      <p>National Portrait Gallery</p>
      <div class={classes.gridContainer}>
        {livePortraitGallery.map((photo, index) => (
          <div class={classes.gridItem}>
            <img
              key={index}
              src={photo}
              alt={`Gabriella at the harp ${index + 1}`}
              className={classes.image}
            />
          </div>
        ))}
      </div>
      <h1 className={classes.mediaTitle}>Live</h1>
      <p>Natural History Museum</p>
      <div class={classes.gridContainer}>
        {liveNaturalHistory.map((photo, index) => (
          <div class={classes.gridItem}>
            <img
              key={index}
              src={photo}
              alt={`Gabriella at the harp ${index + 1}`}
              className={classes.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
