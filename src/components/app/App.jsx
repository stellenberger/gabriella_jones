import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { Navbar, Landing, About, Schedule, Media, Contact, Footer } from '../index'
import classes from './App.module.scss'
import ReactGa from 'react-ga'

function App() {
  useEffect(() => {
    ReactGa.initialize('XX-XXXXXXXX-XX')

    // to report page view
    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])
  return (
      <div className={classes.appContentContainer}>
        <Navbar />
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact path='/about' component={About} />
              <Route exact path='/schedule' component={Schedule} />
              <Route exact path='/media' component={Media} />
              <Route exact path='/contact' component={Contact} />
            </Switch>
          </BrowserRouter>
        <Footer />
      </div>
  );
}

export default App;
