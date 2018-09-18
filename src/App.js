import React, { Component } from 'react';
import './App.css';
import Options from './components/Options';
import Display from './components/Display';
import Buttons from './components/Buttons';

class App extends Component {
  state = {
    breakLength: 5,
    sessionLength: 25,
    timerMinutes: 25,
    timerSeconds: 60,
  }
  handleResetButton = () => {
    this.setState({
      breakLength: 5,
      sessionLength: 25,
    })
  }
  handleStartButton = () => {
    setInterval(//Add an arrow function[this keyword]
      this.setState({ timerSeconds: this.state.timerSeconds - 1 }),
    1000);
  }
  componentWillUnmount = () => {
    clearInterval(this.timerId);
  }
  handleOptionsButtons = (e) => {
    const id = e.target.id;
    switch(id) {
      case 'break-increment':
        if(this.state.breakLength >= 60) {
          return;
        }
        this.setState({ breakLength: this.state.breakLength + 1 });
        break;
      case 'break-decrement':
        if(this.state.breakLength <= 0) {
          return;
        }
        this.setState({ breakLength: this.state.breakLength - 1 });
        break;
      case 'session-increment':
        if(this.state.sessionLength >= 60) {
          return;
        }
        this.setState({ sessionLength: this.state.sessionLength + 1 });
        break;
      case 'session-decrement':
        if(this.state.sessionLength <= 0) {
          return;
        }
        this.setState({ sessionLength: this.state.sessionLength - 1 });
        break;
      default:
        break;
    }
  }
  render() {
    return (
      <div id="app">
        <h1>Pomodoro Clock</h1>
        <Options
          breakLength = { this.state.breakLength }
          sessionLength = { this.state.sessionLength }
          handleOptionsButtons = { this.handleOptionsButtons }
        />
        <Display 
          timerMinutes = { this.state.timerMinutes }
          timerSeconds = { this.state.timerSeconds }
        />
        <Buttons
          handleStartButton = { this.handleStartButton }
          handleResetButton = { this.handleResetButton }
        />
      </div>
    );
  }
}

export default App;
