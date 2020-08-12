import React from 'react';
import { Navbar, Landing } from '../index'
import classes from './App.module.scss'

function App() {
  return (
      <div className={classes.appContentContainer}>
        <Navbar />
        <Landing />
      </div>
  );
}

export default App;
