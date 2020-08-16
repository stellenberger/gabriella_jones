import React from 'react'
import classes from './Schedule.module.scss'
import { withRouter } from 'react-router-dom'

const Schedule = () => {
  const years = [
    {id: 1, year: '2020'},
    {id: 1, year: '2019'},
    {id: 1, year: '2018'},
    {id: 1, year: '2017'}
  ] 

  const currentYear = 2020

  const Concerts = [
    {
      id: 1,
      date: '15th',
      dateMonth: 'August',
      city: 'London',
      venue: "St James' Piccadilly",
      repertoire: "Bach Chaconne",
      start_time: '7pm',
      ticket_link: 'https://www.stephanellenberger.dev'
    },
    {
      id: 2,
      date: '9th',
      dateMonth: 'July',
      city: 'London',
      venue: "Purcell Room, Southbank Center",
      repertoire: "More Repertoire",
      start_time: '7pm',
      ticket_link: 'https://www.stephanellenberger.dev'
    },
    {
      id: 3,
      date: '19th',
      dateMonth: 'May',
      city: 'New York',
      venue: "Carnegie Hall",
      repertoire: "More Repertoire",
      start_time: '7pm',
      ticket_link: 'https://www.stephanellenberger.dev'
    }
  ]

  return (
    <div className={classes.scheduleContainer}>
      <div className={classes.yearNavigator}>
        { years && years.map((year) => {
          return (
            <p className={classes.year} id={year.id}>{year.year}</p>
          )
        })}
      </div>
      <div className={classes.scheduleList}>
        <p className={classes.currentYearTitle}>{currentYear}</p>
        { Concerts && Concerts.map((concert, index) => {
          let color = { backgroundColor: 'white'}
          {index % 2 === 0 ? color = { backgroundColor: '#E6E6E6'} : color = { backgroundColor: 'white'}}
          return (
            <div className={classes.scheduleCard} id={concert.id} style={color}>
              <div className={classes.concertDate}>
                <p><span>{concert.date}</span> {concert.dateMonth}</p>
              </div>
              <div className={classes.concertInformation}>
                <p>{concert.city}</p>
                <p>{concert.venue}</p>
                <p>{concert.repertoire}</p>
                <p>{concert.start_time}</p>
                <a href={concert.ticket_link} className={classes.buyTickets}>Buy Tickets</a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Schedule