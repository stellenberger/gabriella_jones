import React from 'react'
import classes from './Events.module.scss'
import {
  Experience1, 
  Experience2, 
  Experience3,
  Experience4,
} from '../../media'

export default function LuxuryMedia() {
  return (
    <div class={classes.gridContainer}> 
      {/* The ideal thing to do here is to have each image turned into a square for this grid. */}
        <div class={classes.gridItem}><img src={Experience1} alt="Harp at private event" class={classes.image}/></div>
        <div class={classes.gridItem}><img src={Experience2} alt="Looking down at fornum and mason" class={classes.image}/></div>
        <div class={classes.gridItem}><img src={Experience3} alt="A beautiful photograph" class={classes.image}/></div>
        <div class={classes.gridItem}><img src={Experience4} alt="Harp at a private event" class={classes.image}/></div>
    </div>
  )
}
