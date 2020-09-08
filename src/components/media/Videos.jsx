import React from 'react'
import classes from './Media.module.scss'
import ReactPlayer from 'react-player';
import video_links from '../../information/video_links.json'

const Videos = () => {
  return (
    <div>
      <p className={classes.mediaTitle}>Videos</p>
      <div className={classes.videoContainer}>
        <div className={classes.videoWrapper}>  
          {video_links.map(video => {
            return <ReactPlayer className={classes.video} url={video.video_link} width="100%" height="45vh" />
          })}
        </div>
      </div>
    </div>
  )
}

export default Videos