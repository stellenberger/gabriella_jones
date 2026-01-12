import React, { useState, useEffect } from "react";
import classes from "./Schedule.module.scss";
import concertSchedule from "../../information/concertSchedule.json";
import { fetchConcerts } from "../../sanity/client";

const Schedule = () => {
  const [year, setYear] = useState(new Date().getFullYear().toString()); // this will hold the current year by default and changes when user selects another year
  const [allConcerts, setAllConcerts] = useState([]); // all concerts from CMS (or fallback)
  const [currentYearConcerts, setCurrentYearConcerts] = useState([]); // holds concerts of the current year

  useEffect(() => {
    const loadConcerts = async () => {
      try {
        const cmsConcerts = await fetchConcerts();
        if (Array.isArray(cmsConcerts) && cmsConcerts.length > 0) {
          setAllConcerts(cmsConcerts);
          return;
        }
      } catch (e) {
        // fall back below
      }
      // Fallback to local JSON if CMS is empty/unavailable
      // setAllConcerts(concertSchedule.concerts || []);
    };
    loadConcerts();
  }, []);

  useEffect(() => {
    const filtered = (allConcerts || []).filter((concert) => concert.year === year);
    setCurrentYearConcerts(filtered);
  }, [year, allConcerts]);

  const years = [
    { id: 1, year: "2025" },
    { id: 1, year: "2024" },
    { id: 2, year: "2023" },
    { id: 3, year: "2022" },
    { id: 4, year: "2021" },
    { id: 5, year: "2020" },
    { id: 6, year: "2019" },
    { id: 7, year: "2018" },
  ];

  const handleYearClick = (year) => {
    setYear(year);
  };

  return (
    <div className={classes.scheduleContainer}>
      <div className={classes.yearNavigator}>
        {years &&
          years.map((year) => {
            return (
              <p
                className={classes.year}
                id={year.id}
                onClick={() => handleYearClick(year.year)}
              >
                {year.year}
              </p>
            );
          })}
      </div>
      <div className={classes.scheduleList}>
        <p className={classes.currentYearTitle}>{year}</p>
        {currentYearConcerts &&
          currentYearConcerts.map((concert, index) => {
            let color = { backgroundColor: "white" };
            {
              index % 2 === 0
                ? (color = { backgroundColor: "#E6E6E6" })
                : (color = { backgroundColor: "white" });
            }
            return (
              <div
                className={classes.scheduleCard}
                id={concert.id || concert._id}
                style={color}
              >
                <div className={classes.concertDate}>
                  <p>
                    <span>{concert.date}</span> {concert.dateMonth}
                  </p>
                </div>
                <div className={classes.concertInformation}>
                  <p className={classes.city}>{concert.city}</p>
                  <p>{concert.venue}</p>
                  <p>{concert.repertoire}</p>
                  <p>{concert.start_time}</p>
                  <a href={concert.ticket_link} className={classes.buyTickets}>
                    More Information
                  </a>
                </div>
              </div>
            );
          })}
        {currentYearConcerts.length === 0 && (
          <p className={classes.noConcerts}>
            Check back soon for upcoming concerts
          </p>
        )}
      </div>
    </div>
  );
};

export default Schedule;
