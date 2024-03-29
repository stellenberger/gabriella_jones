import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  Landing,
  About,
  Schedule,
  Media,
  Contact,
  Footer,
  Topnav,
  Events,
} from "../index";
import classes from "./App.module.scss";
import ReactGa from "react-ga";
import landingImage from "../../media/hero.jpg";

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
    ReactGa.initialize("UA-175013754-2");

    // to report page view
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);
  console.log(window.location.pathname);

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
            <Route exact path="/contact" component={Contact} />
            {/* <Route exact path='/luxury-events' component={Events} /> */}
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
