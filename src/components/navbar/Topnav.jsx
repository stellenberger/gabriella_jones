import React from "react";
import classes from "./Navbar.module.scss";
import logo from "../../media/logo.svg";
import { Link } from "react-router-dom";
import { Burger } from "../index";
import landingImage from "../../media/gabriella-jones-photos-2025/media-elly-lucas/landing-page.jpg";

const Topnav = ({ changeColor }) => {
  const backgroundHeroImage = {
    backgroundImage: `url(${landingImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "right 55% ",
  };

  const backgroundColor = {
    backgroundColor: "#E6E6E6",
  };
  return (
    <div className={classes.navbar}>
      <div className={classes.navbarContent}>
        <div className={classes.logoContainer}>
          <Link to="/">
            <img
              src={logo}
              alt="Site Logo"
              className={classes.logo}
              onClick={() => changeColor(backgroundHeroImage)}
            />
          </Link>
        </div>
        <Burger backgroundColor={backgroundColor} changeColor={changeColor} />
      </div>
    </div>
  );
};

export default Topnav;
