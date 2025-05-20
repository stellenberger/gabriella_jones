import React, { useState } from 'react'
import classes from './Media.module.scss'
import { Videos, Photos } from './index.jsx'
const Media = () => {
  const [subPage, setSubPage] = useState('Photos')
  const handleClick = (page) => {
    setSubPage(page)
  }

  const subpageSelect = () => {
    if(subPage === 'Photos') {
      return (<Photos />)
    } else {
      return (<Videos />)
    }
  }
  return (
    <div className={classes.mediaContainer}>
      <div className={classes.mediaNavigator}>
        <a href="/media#photos" onClick={() => handleClick('Photos')}><div className={classes.links}>Photos</div></a>
        <a href="/media#videos" onClick={() => handleClick('Videos')}><div className={classes.links}>Videos</div></a>
      </div>
      <div className={classes.media}>
        { subpageSelect() }
      </div>
    </div>
  )
}

export default Media