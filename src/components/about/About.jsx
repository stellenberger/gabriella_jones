import React, { useState } from 'react'
import classes from './About.module.scss'
import Biography from './Biography'
import Awards from './Awards'
import ADeux from './ADeux'
import Repertoire from './Repertoire'
import Sponsors from './Sponsors'


const About = () => {
  const [subPage, setSubPage] = useState('biography')

  const handleClick = (page) => {
    setSubPage(page)
  }

  const loadPage = () => {
    switch (subPage) {
      case 'biography':
        return <Biography />;
      case 'awards':
        return <Awards />;
      case 'adeux':
        return <ADeux />;
      case 'repertoire':
        return <Repertoire />;
      default:
        return null;
    }
  }
  return (
    <div className={classes.aboutContainer}>
      <div className={classes.sideNav}>
        <a href="/about#biography" onClick={() => handleClick('biography')}><div className={classes.links}>Biography</div></a>
        <a href="/about#awards" onClick={() => handleClick('awards')}><div className={classes.links}>Awards</div></a>
        <a href="/about#repertoire" onClick={() => handleClick('repertoire')}><div className={classes.links}>Repertoire</div></a>
        <a href="/about#adeux" onClick={() => handleClick('adeux')}><div className={classes.links}>A Deux Duo</div></a>
      </div>
      <div className={classes.aboutContent}>
        { loadPage() }
        <Sponsors />
      </div>
    </div>
  )
}

export default About