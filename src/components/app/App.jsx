import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  Landing,
  About,
  Schedule,
  Media,
  Footer,
  Topnav,
  Projects,
} from "../index";
import classes from "./App.module.scss";
import ReactGa from "react-ga";
import landingImage from "../../media/gabriella-jones-photos-2025/media-elly-lucas/landing-page.jpg";

function App() {
  const [background, setBackground] = useState(null);
  const backgroundHeroImage = {
    backgroundImage: `url(${landingImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "right 55% ",
  };

  const backgroundColor = {
    backgroundColor: "#E6E6E6",
  };

  const styling = () => {
    if (window.location.pathname === "/") {
      return setBackground(backgroundHeroImage);
    } else {
      return setBackground(backgroundColor);
    }
  };
  useEffect(() => {
    styling();
    console.log("trig");
    ReactGa.initialize("UA-175013754-2");

    // to report page view
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  const changeColor = (color) => {
    setBackground(color);
  };
  return (
    <div style={background}>
      <BrowserRouter>
        <Topnav changeColor={changeColor} />
        <div className={classes.appContentContainer}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/schedule" component={Schedule} />
            <Route exact path="/media" component={Media} />
            <Route exact path="/projects" component={Projects} />
            {/* <Route exact path='/luxury-events' component={Events} /> */}
          </Switch>
        </div>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
