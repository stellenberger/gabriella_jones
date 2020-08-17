import React from 'react'
import classes from './Contact.module.scss'
import contactImage from '../../media/contactImage.jpg'
const Contact = () => {
  const managementDetails = [{name: 'John Smith', mobile_number: '+44 7893 944 031', email: 'john@smith.com'}]
  const personalDetails = [{name: 'Gabriella Jones', mobile_number: '+44 7893 944 031', email: 'gsjones@btinternet.com'}]
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
              <p>{management.email}</p>
              <p>{management.mobile_number}</p>
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