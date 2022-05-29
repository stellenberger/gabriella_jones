import React from 'react'
import classes from './Events.module.scss'
import { 
  ClientLogo1,
  ClientLogo2,
  ClientLogo3,
  ClientLogo4,
  ClientLogo5,
  ClientLogo6,
  ClientLogo7,
  ClientLogo8,
  ClientLogo9,
  ClientLogo10,
  ClientLogo11,
  ClientLogo12,
} from '../../media'

export default function Clients() {
  return (
    <div>
      <p className={classes.mediaTitle}>Clients</p>
      <div class={classes.gridContainer}> 
        <div class={classes.gridItem}><img src={ClientLogo1} alt="Barclays logo" class={classes.image}/></div>
        <div class={classes.gridItem}><img src={ClientLogo2} alt="Marriot logo" class={classes.image}/></div>
        <div class={classes.gridItem}><img src={ClientLogo3} alt="Sofitel logo" class={classes.image}/></div>
        <div class={classes.gridItem}><img src={ClientLogo4} alt="Rolex Logo" class={classes.image}/></div>
        <div class={classes.gridItem}><img src={ClientLogo5} alt="Gucci Logo" class={classes.image}/></div>
        <div class={classes.gridItem}><img src={ClientLogo6} alt="Fortnum and Mason logo" class={classes.image}/></div>
        <div class={classes.gridItem}><img src={ClientLogo7} alt="Watches of Switzerland logo" class={classes.image}/></div>
        <div class={classes.gridItem}><img src={ClientLogo8} alt="The hurlingham club logo" class={classes.image}/></div>
        <div class={classes.gridItem}><img src={ClientLogo9} alt="Garrick Club logo" class={classes.image}/></div>
        <div class={classes.gridItem}><img src={ClientLogo10} alt="The Dorchester logo" class={classes.image}/></div>
        <div class={classes.gridItem}><img src={ClientLogo11} alt="Royal Academy of Arts logo" class={classes.image}/></div>
        <div class={classes.gridItem}><img src={ClientLogo12} alt="Lanes of London logo" class={classes.image}/></div>
      </div>
    </div>
  )
}
