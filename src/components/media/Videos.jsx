import React, { Fragment } from "react";
import classes from "./Media.module.scss";
import ReactPlayer from "react-player";
import video_links from "../../information/video_links.json";

const Videos = () => {
  return (
    <div>
      <p className={classes.mediaTitle}>Videos</p>
      {video_links.map((video) => {
        return (
          <Fragment key={video.id}>
            <h1>{video.composer}</h1>
            <p>By {video.title}</p>
            <div className={classes.videoContainer}>
              <div className={classes.videoWrapper}>
                <ReactPlayer
                  className={classes.video}
                  url={video.video_link}
                  width="100%"
                  height="45vh"
                />
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Videos;
