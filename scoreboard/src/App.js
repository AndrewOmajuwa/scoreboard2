import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import Scoreboard from './components/ScoreBoard';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Title content="The Ultimate ScoreBoard"/>
        <main>
          <Scoreboard />
        </main>
      </div>
    );
  }
}

export default App;
