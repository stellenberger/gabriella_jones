import React from 'react'
import classes from './Footer.module.scss'
import SocialLinks from './SocialLinks'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <SocialLinks />
    </footer>
  )
}

export default Footer