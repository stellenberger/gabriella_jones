import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { Landing, About, Schedule, Media, Contact, Footer } from '../index'
import logo from '../../media/logo.svg'
import { Link } from 'react-router-dom'
import classes from './App.module.scss'
import ReactGa from 'react-ga'
import landingImage from '../../media/hero.jpg'

function App() {
  const [background, setBackground] = useState(null)
  const backgroundHeroImage = {
    backgroundImage: `url(${landingImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'right 55% '
  }

  const backgroundColor = {
    backgroundColor: '#E6E6E6'
  }

  const styling = () => {
    if (window.location.pathname === '/') {
      return (
        setBackground(
          backgroundHeroImage
        )
      ) 
    } else {
      return (
        setBackground(
          backgroundColor
        )
      )
    }
  }
  useEffect(() => {
    styling()
    ReactGa.initialize('XX-XXXXXXXX-XX')

    // to report page view
    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])
  console.log(window.location.pathname)
  

  const changeColor = (color) => {
    setBackground(color)
  }
  return (
    <div style={background}>
      <BrowserRouter>
        <div className={classes.navbar}>
        <div className={classes.navbarContent}>
          <div className={classes.logoContainer}>
            <Link to='/'><img src={logo} alt="Site Logo" className={classes.logo} onClick={() => changeColor(backgroundHeroImage)}/></Link>
          </div>
          <div className={classes.links}>
            <Link to='/about' onClick={() => changeColor(backgroundColor)}>about</Link>
            <Link to='/schedule' onClick={() => changeColor(backgroundColor)}>schedule</Link>
            <Link to='/media' onClick={() => changeColor(backgroundColor)}>media</Link>
            <Link to='/contact' onClick={() => changeColor(backgroundColor)}>contact</Link>
          </div>
        </div>
      </div>
          <div className={classes.appContentContainer}>
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact path='/about' component={About} />
              <Route exact path='/schedule' component={Schedule} />
              <Route exact path='/media' component={Media} />
              <Route exact path='/contact' component={Contact} />
            </Switch>
          </div>
          <Footer />
      </BrowserRouter>
    </div>
    
  );
}

export default App;
