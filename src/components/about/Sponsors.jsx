import React from 'react'
import classes from './About.module.scss'
import { leverhulme, helpMusicians, makingMusic, parkLane } from '../../media'


const Sponsors = () => {
  return (
    <div className={classes.sponsors}>
      <img src={leverhulme} alt=""/>
      <img src={helpMusicians} alt=""/>
      <img src={makingMusic} alt=""/>
      <img src={parkLane} alt=""/>
    </div>
  )
}

export default Sponsors