import React from 'react'
import classes from './About.module.scss'
import { aboutPhoto } from '../../media'
import biography from '../../information/biography.json'

const Biography = () => {
  return (
      <div>
        <img src={aboutPhoto} alt="gabriella jones standing at the harp" className={classes.aboutPhoto}/>
        <p className={classes.aboutBio}>{biography.biography.map(section => {
          return (
            <span>{section.paragraph}<br/><br/></span>
          )
        })}</p>
        <p>&copy; This information is copyrighted and cannot be used for programme notes or other publications without the artist's consent. Please contact Gabriella directly for relevant information.</p>
    </div>
  )
}

export default Biography