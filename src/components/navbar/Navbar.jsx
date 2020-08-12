import React from 'react'
import classes from './Navbar.module.scss'
import logo from '../../media/logo.svg'

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <img src={logo} alt="Site Logo"/>
      </div>
      <div className={classes.links}>
        <a href="/about">about</a>
        <a href="/schedule">schedule</a>
        <a href="/media">media</a>
        <a href="/contact">contact</a>
      </div>
    </div>
  )
}

export default Navbar