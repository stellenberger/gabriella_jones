import React, { useState, useEffect } from 'react'
import classes from './Events.module.scss'
import Clients from './Clients'
import Experience from './Experience'
import GetInTouch from './GetInTouch'

export default function Events() {
  const [subPage, setSubPage] = useState('clients')

  const handleClick = (page) => {
    setSubPage(page)
  }

  const loadPage = () => {
    switch (subPage) {
      case 'clients':
        return <Clients/>;
      case 'experience':
        return <Experience />;
      case 'get-in-touch':
        return <GetInTouch />;
      default:
        return null;
    }
  }
  return (
    <div className={classes.eventsContainer}>
      <div className={classes.sideNav}>
        <a href="/luxury-events#clients" onClick={() => handleClick('clients')}><div className={classes.links}>Clients</div></a>
        <a href="/luxury-events#experience" onClick={() => handleClick('experience')}><div className={classes.links}>Experience</div></a>
        <a href="/luxury-events#get-in-touch" onClick={() => handleClick('get-in-touch')}><div className={classes.links}>Get in touch</div></a>
      </div>
      <div className={classes.eventsContent}>
        { loadPage() }
      </div>
    </div>
  )
}
