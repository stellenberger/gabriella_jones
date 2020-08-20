import React from 'react'
import classes from './About.module.scss'
import { leverhulme, helpMusicians, makingMusic, parkLane } from '../../media'


const Sponsors = () => {
  return (
    <div className={classes.sponsors}>
      <a href="https://www.leverhulme.ac.uk/"><img src={leverhulme} alt=""/></a>
      <a href="https://www.helpmusicians.org.uk/"><img src={helpMusicians} alt=""/></a>
      <a href="https://www.makingmusic.org.uk/"><img src={makingMusic} alt=""/></a>
      <a href="https://www.parklanegroup.co.uk/"><img src={parkLane} alt=""/></a>
    </div>
  )
}

export default Sponsors