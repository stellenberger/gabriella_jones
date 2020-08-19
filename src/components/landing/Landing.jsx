import React from 'react'
import classes from './Landing.module.scss'

const Landing = () => {
  return (
    <div className={classes.landingContainer}>
      <div className={classes.quoteContainer}>
        <p className={classes.quote}><i style={{fontSize:'25px;'}}>“one of the most exciting young musicians to emerge on the concert scene in recent years”</i></p>
        <p className={classes.quoteBy}> West Meon Festival 2019 </p>
        <p className={classes.quoteBy}>*** <i>The Guardian</i></p>
      </div>
    </div>
  )
}

export default Landing