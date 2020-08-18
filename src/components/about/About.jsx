import React from 'react'
import classes from './About.module.scss'
import Biography from './Biography'
import Awards from './Awards'
import Sponsors from './Sponsors'


const About = () => {
  return (
    <div className={classes.aboutContainer}>
      <div className={classes.sideNav}>
        <a href="#biography"><div className={classes.links}>Biography</div></a>
        <a href="#awards"><div className={classes.links}>Awards</div></a>
      </div>
      <div className={classes.aboutContent}>
        <Biography />
        <Awards />
        <Sponsors />
      </div>
    </div>
  )
}

export default About