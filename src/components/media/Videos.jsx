import React from 'react'
import classes from './Media.module.scss'
import ReactPlayer from 'react-player';

const Videos = () => {
  const video_link = 'https://www.youtube.com/watch?v=J0MHSoiHxEE&t=361s'
  return (
    <div>
      <p className={classes.mediaTitle}>Videos</p>
      <div className={classes.videoContainer}>
        <div className={classes.videoWrapper}>  
          <ReactPlayer className={classes.video} url={video_link} width="100%" height="45vh" />
        </div>
      </div>
    </div>
  )
}

export default Videos