import React, { Component } from 'react';
import classes from './App.module.css';

class App extends Component {
  render() {
    return (
      <div className={classes.body}>





      <div className={classes.landingHeader}>
  <h1 className={classes.black}>Welcome to EtherFund!</h1>
  <a href="/view" className={[classes.btn, classes.btnSuccess].join(' ')}>View All Campaigns</a>
  </div>

  <ul className={classes.slideshow}>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>



      </div>
    );
  }
}

export default App;
