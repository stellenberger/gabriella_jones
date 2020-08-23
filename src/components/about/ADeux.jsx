import React from 'react'
import classes from './About.module.scss'
import adeuxInformation from '../../information/adeux.json'
import { MarkTaylor, ADeuxPhoto } from '../../media'

const ADeux = () => {
  return (
    <div className={classes.adeuxContainer}>
      <span className={classes.adeux}>
        <p className={classes.adeuxTitle}>A Deux Duo</p>
        {adeuxInformation.adeux.map(adeux => {
          return (
            <>
            <span>
              <img src={ADeuxPhoto} alt="Gabriella Jones and Mark Talor are A Deux Duo" className={classes.adeuxPhoto}/>
              <p className={classes.adeuxContent}>{adeux.biography}</p>
            </span>
            <span>

              <p className={classes.adeuxTitle}>Mark Taylor</p>
              <img src={MarkTaylor} alt="gabriella jones standing at the harp" className={classes.adeuxPhoto}/>
              <div className={classes.adeuxContent}>
                {adeux.markBiography.map(biography => {
                  return (
                    <p>{biography.paragraph} <br /></p>
                  )
                })}
              </div>
            </span>
            </>
          )
        })}
      </span>
    </div>
  )
}

export default ADeux