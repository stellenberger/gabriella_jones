import React from 'react'
import classes from './About.module.scss'
import { aboutPhoto } from '../../media'
import biography from '../../information/biography.json'

const Biography = () => {
  console.log(biography)
  return (
      <div id='biography'>
        <img src={aboutPhoto} alt="gabriella jones standing at the harp" className={classes.aboutPhoto}/>
        <p className={classes.aboutBio}>{biography.biography.map(section => {
          return (
            <span>{section.paragraph}<br/><br/></span>
          )
        })}</p>
    </div>
  )
}

export default Biography