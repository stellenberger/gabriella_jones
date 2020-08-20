import React, { useState } from 'react'
import classes from './Media.module.scss'
import { Videos, Photos, Audio } from './index.jsx'
const Media = () => {
  const [subPage, setSubPage] = useState('photos')

  const handleClick = (page) => {
    setSubPage(page)
  }

  const subpageSelect = () => {
    if(subPage === 'Photos') {
      return (<Photos />)
    } else if (subPage === 'Videos') {
      return (<Videos />)
    } else {
      return (<Audio />)
    }
  }
  return (
    <div className={classes.mediaContainer}>
      <div className={classes.mediaNavigator}>
        <a href="/media#photos" onClick={() => handleClick('Photos')}><div className={classes.links}>Photos</div></a>
        <a href="/media#videos" onClick={() => handleClick('Videos')}><div className={classes.links}>Videos</div></a>
        <a href="/media#audio" onClick={() => handleClick('Audio')}><div className={classes.links}>Audio</div></a>
      </div>
      <div className={classes.media}>
        { subpageSelect() }
      </div>
    </div>
  )
}

export default Media