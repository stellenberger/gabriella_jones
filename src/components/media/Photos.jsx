import React from 'react'
import classes from './Media.module.scss'
import { image1, image2, image3, image4, image5, image6, image7, image8 } from '../../media/photos'

const Photos = () => {
  
  return (
    <div>
      <p className={classes.mediaTitle}>Photos</p>
      <div class={classes.gridContainer}> 
      {/* The ideal thing to do here is to have each image turned into a square for this grid. */}
        <div class={classes.gridItem}><img src={image1} alt="Gabriella at the harp" class={classes.image}/></div>
        <div class={classes.gridItem}><img src={image2} alt="Gabriella at the harp" class={classes.image}/></div>
        <div class={classes.gridItem}><img src={image3} alt="Gabriella at the harp" class={classes.image}/></div>
        <div class={classes.gridItem}><img src={image4} alt="Gabriella at the harp" class={classes.image}/></div>
        <div class={classes.gridItem}><img src={image5} alt="Gabriella at the harp" class={classes.image}/></div>
        <div class={classes.gridItem}><img src={image6} alt="Gabriella at the harp" class={classes.image}/></div>
        <div class={classes.gridItem}><img src={image7} alt="Gabriella at the harp" class={classes.image}/></div>
        <div class={classes.gridItem}><img src={image8} alt="Gabriella at the harp" class={classes.image}/></div>
      </div>
    </div>
  )
}

export default Photos