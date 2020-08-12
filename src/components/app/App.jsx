import React, { useEffect } from 'react';
import { Navbar, Landing } from '../index'
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
        <Landing />
      </div>
  );
}

export default App;
