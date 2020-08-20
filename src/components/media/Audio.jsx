import React from 'react'
import classes from './Media.module.scss'

const Audio = () => {
  
  return (
    <div>
      <p className={classes.mediaTitle}>Audio</p>
      <div className={classes.audioContainer}>
        <p>Please check back soon for audio.</p>
      </div>
    </div>
  )
}

export default Audio