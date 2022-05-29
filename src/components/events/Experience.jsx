import React from 'react'
import LuxuryEventsInformation from '../../information/luxury_events_information.json'

export default function Experience() {
  return (
    <div>
      { LuxuryEventsInformation && LuxuryEventsInformation["experience"].map((para) => {
        return (
          <p>{para["paragraph"]}</p>
        )
      })}
    </div>
  )
}
