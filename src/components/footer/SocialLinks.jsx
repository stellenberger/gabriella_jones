import React from 'react'
import classes from './Footer.module.scss'
import { Instagram, Twitter, YouTube } from '../../media'

const SocialLinks = () => {
  return (
    <footer className={classes.socialLinks}>
      <a href="/instagramLink">
        <img src={Instagram} alt="Instagram logo"/>
      </a>
      <a href="/twitterLink">
        <img src={Twitter} alt="Twitter logo"/>
      </a>
      <a href="/youtubeLink">
        <img src={YouTube} alt="Youtube logo"/>
      </a>
    </footer>
  )
}

export default SocialLinks