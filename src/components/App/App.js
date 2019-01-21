import React, { Component } from 'react';
import Preloader from '../Preloader/Preloader'
import Home from '../Home/Home';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Preloader />
        <Home />

      </div>
    );
  }
}

export default App;
