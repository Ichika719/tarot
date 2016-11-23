import React, { Component } from 'react';

import './home.css';

class HomePage extends Component {
  render() {
    return (
      <div className="FirstPage">
        <h1>Daily Tarot</h1>
        <p> </p>
        <img className="magic" src="http://i.imgur.com/SRGVLtO.png"/>
        <p> </p>
        <p> Breathe deeply, focus on a question, set your intention... </p>
        <p> And when you are ready, click on the start botton below. </p>
        <p> </p>
        <a href="#/card" className="btn btn-danger btn-lg">Start</a>
      </div>
    );
  }
}

export default HomePage;
