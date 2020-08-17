import React, { useState, useEffect } from 'react'
import classes from './Schedule.module.scss'
import { withRouter } from 'react-router-dom'

const Schedule = () => {
  const [year, setYear] = useState('2020') // this will hold the current year by default and changes when user selects another year
  const [allConcerts, setAllConcerts] = useState(null) // this will hold the concerts
  const [currentYearConcerts, setCurrentYearConcerts] = useState([]) // holds concerts of the current year

  useEffect(() => {
    let currentYear = Concerts.filter(concert => {
      return concert.year === year
    })
    setCurrentYearConcerts(currentYear)
  }, [year])


  const years = [
    {id: 1, year: '2020'},
    {id: 2, year: '2019'},
    {id: 3, year: '2018'},
    {id: 4, year: '2017'}
  ] 

  const Concerts = [
    {
      id: 1,
      year: '2020',
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
      year: '2020',
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
      year: '2020',
      date: '19th',
      dateMonth: 'May',
      city: 'New York',
      venue: "Carnegie Hall",
      repertoire: "More Repertoire",
      start_time: '7pm',
      ticket_link: 'https://www.stephanellenberger.dev'
    },
    {
      id: 4,
      year: '2019',
      date: '8th',
      dateMonth: 'December',
      city: 'Sydney',
      venue: "Sydney Opera House",
      repertoire: "More Repertoire",
      start_time: '7pm',
      ticket_link: 'https://www.stephanellenberger.dev'
    },
    {
      id: 5,
      year: '2019',
      date: '12th',
      dateMonth: 'November',
      city: 'London',
      venue: "Wigmore Hall",
      repertoire: "More Repertoire",
      start_time: '7pm',
      ticket_link: 'https://www.stephanellenberger.dev'
    },
  ]

  const handleYearClick = (year) => {
    // event.preventDefault()
    setYear(year)
  }

  return (
    <div className={classes.scheduleContainer}>
      <div className={classes.yearNavigator}>
        { years && years.map((year) => {
          return (
            <p className={classes.year} id={year.id} onClick={() => handleYearClick(year.year)}>{year.year}</p>
          )
        })}
      </div>
      <div className={classes.scheduleList}>
        <p className={classes.currentYearTitle}>{year}</p>
        { currentYearConcerts && currentYearConcerts.map((concert, index) => {
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