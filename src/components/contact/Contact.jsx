import React from "react";
import classes from "./Contact.module.scss";
import contactImage from "../../media/contactImage.jpg";
const Contact = () => {
  const personalDetails = [
    {
      name: "Gabriella Jones",
      mobile_number: "",
      email: "gjonesharp@gmail.com",
    },
  ];
  return (
    <div className={classes.contactContainer}>
      {personalDetails &&
        personalDetails.map((personal) => {
          return (
            <div>
              <p className={classes.contactTitle}>General Enquiries</p>
              <p>{personal.email}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Contact;
