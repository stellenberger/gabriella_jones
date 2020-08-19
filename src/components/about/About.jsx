import React, { useState } from 'react'
import classes from './About.module.scss'
import Biography from './Biography'
import Awards from './Awards'
import Sponsors from './Sponsors'


const About = () => {
  const [subPage, setSubPage] = useState('biography')

  const handleClick = (page) => {
    setSubPage(page)
  }
  return (
    <div className={classes.aboutContainer}>
      <div className={classes.sideNav}>
        <a href="/about#biography" onClick={() => handleClick('biography')}><div className={classes.links}>Biography</div></a>
        <a href="/about#awards" onClick={() => handleClick('awards')}><div className={classes.links}>Awards</div></a>
      </div>
      <div className={classes.aboutContent}>
        {subPage === 'biography' ? (<Biography />) : (<Awards />)}
        <Sponsors />
      </div>
    </div>
  )
}

export default About