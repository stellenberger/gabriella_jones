import React from 'react'
import classes from './Navbar.module.scss'
import logo from '../../media/logo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.navbarContent}>
        <div className={classes.logoContainer}>
          <Link to='/'><img src={logo} alt="Site Logo" className={classes.logo}/></Link>
        </div>
        <div className={classes.links}>
          <Link to='/about'>about</Link>
          <Link to='/schedule'>schedule</Link>
          <Link to='/media'>media</Link>
          <Link to='/contact'>contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar