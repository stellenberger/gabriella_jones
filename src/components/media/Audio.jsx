import React from 'react'
import classes from './Media.module.scss'
import ReactPlayer from 'react-player';
import audio_links from '../../information/audio_links.json'

const Audio = () => {
  
  return (
    <div>
      <p className={classes.mediaTitle}>Audio</p>
      <div className={classes.audioContainer}>
        {audio_links.map(audio => {
            return <ReactPlayer className={classes.video} url={audio.audio_link} width="100%" height="45vh" />
          })}
      </div>
    </div>
  )
}

export default Audio