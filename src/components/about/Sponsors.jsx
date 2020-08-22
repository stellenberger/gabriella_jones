import React from 'react'
import classes from './About.module.scss'
import { leverhulme, helpMusicians, makingMusic, parkLane } from '../../media'


const Sponsors = () => {
  return (
    <div className={classes.sponsors}>
      <a href="https://www.leverhulme.ac.uk/"><img src={leverhulme} alt="Leverhulme Trust"/></a>
      <a href="https://www.helpmusicians.org.uk/"><img src={helpMusicians} alt="Help Musicians UK"/></a>
      <a href="https://www.makingmusic.org.uk/"><img src={makingMusic} alt="Making Music UK"/></a>
      <a href="https://www.parklanegroup.co.uk/"><img src={parkLane} alt="Park Lane Group"/></a>
    </div>
  )
}

export default Sponsors