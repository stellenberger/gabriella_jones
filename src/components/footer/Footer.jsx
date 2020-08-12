import React from 'react'
import classes from './Footer.module.scss'
import { Instagram, Twitter, YouTube } from '../../media'

const Footer = () => {
  return (
    <footer className={classes.footer}>
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

export default Footer