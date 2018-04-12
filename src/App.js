import React, { Component } from 'react';

import './App.css';

import Router from './components/routes.js';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router/>
      </div>
    );
  }
}

