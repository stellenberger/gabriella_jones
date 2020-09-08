import React from 'react'
import classes from './Footer.module.scss'
import { Instagram, Twitter, YouTube } from '../../media'

const SocialLinks = () => {
  return (
    <footer className={classes.socialLinks}>
      <a href="https://www.instagram.com/gjonesharp/?hl=en">
        <img src={Instagram} alt="Instagram logo"/>
      </a>
      <a href="https://twitter.com/gjonesharp">
        <img src={Twitter} alt="Twitter logo"/>
      </a>
      <a href="https://www.youtube.com/channel/UCByoBVT7uMaR_x3nnGBxECQ?view_as=subscriber">
        <img src={YouTube} alt="Youtube logo"/>
      </a>
    </footer>
  )
}

export default SocialLinks