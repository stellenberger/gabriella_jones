import React, { useState, useEffect } from "react";
import classes from "./Schedule.module.scss";
import concertSchedule from "../../information/concertSchedule.json";
import { fetchConcerts } from "../../sanity/client";

const monthNameToIndex = (monthName) => {
  if (!monthName) return 0;
  const m = String(monthName).toLowerCase();
  const map = {
    january: 1,
    february: 2,
    march: 3,
    april: 4,
    may: 5,
    june: 6,
    july: 7,
    august: 8,
    september: 9,
    october: 10,
    november: 11,
    december: 12,
  };
  if (map[m]) return map[m];
  let idx = 0;
  Object.keys(map).forEach((key) => {
    if (m.includes(key)) idx = Math.max(idx, map[key]);
  });
  return idx;
};

const dayStringToNumber = (day) => {
  if (!day) return 0;
  const n = parseInt(String(day).toLowerCase().replace(/(st|nd|rd|th)$/i, ""), 10);
  return Number.isFinite(n) ? n : 0;
};

const orderByMonthDayDesc = (items) => {
  return [...items].sort((a, b) => {
    const monthA = monthNameToIndex(a?.dateMonth);
    const monthB = monthNameToIndex(b?.dateMonth);
    if (monthA !== monthB) return monthB - monthA; // desc by month
    const dayA = dayStringToNumber(a?.date);
    const dayB = dayStringToNumber(b?.date);
    return dayB - dayA; // desc by day
  });
};

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
    const ordered = orderByMonthDayDesc(filtered);
    setCurrentYearConcerts(ordered);
  }, [year, allConcerts]);

  const years = (() => {
    const start = 2018;
    const end = new Date().getFullYear();
    const list = [];
    for (let y = end, id = 1; y >= start; y--, id++) {
      list.push({ id, year: String(y) });
    }
    return list;
  })();

  const handleYearClick = (year) => {
    setYear(year);
  };

  return (
    <div className={classes.scheduleContainer}>
      <div className={classes.yearNavigator}>
        {years &&
          years.map((y) => {
            return (
              <p
                className={`${classes.year} ${y.year === year ? classes.yearActive : ""}`}
                id={y.id}
                onClick={() => handleYearClick(y.year)}
              >
                {y.year}
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
                key={concert.id || concert._id || index}
                style={color}
              >
                <div className={classes.concertDate}>
                  <div className={classes.dateBadge}>
                    <div className={classes.dateDay}>{concert.date}</div>
                    <div className={classes.dateMonth}>
                      {concert.dateMonth}
                    </div>
                  </div>
                </div>
                <div className={classes.concertInformation}>
                  <p className={classes.city}>{concert.city}</p>
                  <p>{concert.venue}</p>
                  <p>{concert.repertoire}</p>
                  <p>{concert.start_time}</p>
                  <a href={concert.ticket_link} className={classes.buyTickets} target="_blank" rel="noreferrer">
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
