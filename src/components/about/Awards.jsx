import React from 'react'
import classes from './About.module.scss'
import awardsInformation from '../../information/awards.json'
import soloPerformances from '../../information/highlighted_solo_performances.json'

const Awards = () => {
  return (
    <div className={classes.awardsContainer} id='awards'>
      <span className={classes.awards}>
        <p className={classes.awardsTitle}>Awards</p>
        {awardsInformation.awards.map(award => {
          return (
            <p>{award.award}</p>
          )
        })}
      </span>
      <span className={classes.highlightedPerformances}>
        <p className={classes.highlightedPerformancesTitle}>Highlighted Solo Performances</p>
        {soloPerformances.highlighted_solo.map(performance => {
          return (
            <p>{performance.venue}</p>
          )
        })}
      </span>
    </div>
  )
}

export default Awards