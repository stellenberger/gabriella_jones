import React from 'react'
import classes from './Contact.module.scss'
import contactImage from '../../media/contactImage.jpg'
const Contact = () => {
  const managementDetails = [{name: 'Making Music', address: '8 Holyrood Street, London SE1 2EL', website: 'makingmusic.org.uk'}]
  const personalDetails = [{name: 'Gabriella Jones', mobile_number: '', email: 'gjonesharp@gmail.com'}]
  return (
    <div className={classes.contactContainer}>
      <div className={classes.contactImage}>
        <img src={contactImage} alt="Gabriella playing the harp" />
      </div>

      <div className={classes.contactInformation}>
        { managementDetails && managementDetails.map((management) => {
          return (
            <div className={classes.managementContactDetails}>
              <p className={classes.contactTitle}>General Management</p>
              <p>{management.name}</p>
              <p>{management.website}</p>
              <p>{management.address}</p>
            </div>
          )
        })}
        { personalDetails && personalDetails.map((personal) => {
          return (
            <div className={classes.personalContactDetails}>
              <p className={classes.contactTitle}>Personal Contact</p>
              <p>{personal.name}</p>
              <p>{personal.email}</p>
              <p>{personal.mobile_number}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Contact