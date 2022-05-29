import React from 'react'
import LuxuryEventsInformation from '../../information/luxury_events_information.json'
import LuxuryMedia from './LuxuryMedia'
import classes from './Events.module.scss'

export default function Experience() {
  return (
    <div>
      <p className={classes.mediaTitle}>Experience</p>
      { LuxuryEventsInformation && LuxuryEventsInformation["experience"].map((para) => {
        return (
          <p>{para["paragraph"]}</p>
        )
      })}
      <LuxuryMedia />
    </div>
  )
}
