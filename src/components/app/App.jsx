import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { Navbar, Landing, About, Schedule, Media, Contact, Footer } from '../index'
import classes from './App.module.scss'
import ReactGa from 'react-ga'
import landingImage from '../../media/hero.jpg'

function App() {
  useEffect(() => {
    ReactGa.initialize('XX-XXXXXXXX-XX')

    // to report page view
    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])
  console.log(window.location.pathname)
  const styling = () => {
    if (window.location.pathname === '/') {
      return (
        {
          backgroundImage: `url(${landingImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'right 55% '
        }
      ) 
    } else {
      return (
        {
          backgroundColor: '#E6E6E6'
        }
      )
    }
  }
  return (
    <div style={styling()}>
      <BrowserRouter>
        <Navbar />
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
