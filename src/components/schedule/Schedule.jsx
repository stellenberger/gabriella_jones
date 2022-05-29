import React, { useState, useEffect } from 'react'
import classes from './Schedule.module.scss'
import concertSchedule from '../../information/concertSchedule.json'

const Schedule = () => {
  const [year, setYear] = useState((new Date().getFullYear()).toString()) // this will hold the current year by default and changes when user selects another year
  const [currentYearConcerts, setCurrentYearConcerts] = useState([]) // holds concerts of the current year

  useEffect(() => {
    let currentYear = Concerts.filter(concert => {
      return concert.year === year
    })
    setCurrentYearConcerts(currentYear)
  }, [year])


  const years = [
    {id: 1, year: '2023'},
    {id: 2, year: '2022'},
    {id: 3, year: '2021'},
    {id: 4, year: '2020'},
    {id: 5, year: '2019'},
    {id: 6, year: '2018'}
  ] 

  const Concerts = concertSchedule.concerts

  const handleYearClick = (year) => {
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
                <p className={classes.city}>{concert.city}</p>
                <p>{concert.venue}</p>
                <p>{concert.repertoire}</p>
                <p>{concert.start_time}</p>
                <a href={concert.ticket_link} className={classes.buyTickets}>More Information</a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Schedule