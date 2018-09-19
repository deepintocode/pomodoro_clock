import React, { Component } from 'react';
import './App.css';
import Options from './components/Options';
import Display from './components/Display';
import Buttons from './components/Buttons';

class App extends Component {
  state = {
    breakLength: 5,
    sessionLength: 25,
    breakSeconds: 300,
    sessionSeconds: 1500,
    inBreak: false,
  }
  handleResetButton = () => {
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      breakSeconds: 300,
      sessionSeconds: 1500,
      inBreak: false,
    });
    clearInterval(this.timerId);
    this.timerId = null;
    let beep = document.querySelector('#beep');
    beep.pause();
    beep.currentTime = 0;
  }
  handleStartButton = () => {
    if(this.state.inBreak) {
      if(this.timerId) {
        this.setState(state => (
          { breakSeconds: state.breakSeconds }
          )
        )
        clearInterval(this.timerId);
        this.timerId = null;
        return;
      }
      this.timerId = setInterval(() => {
        this.setState({ breakSeconds: this.state.breakSeconds - 1 });
      },
      1000);
    } else {
      if(this.timerId) {
        this.setState(state => (
          { breakSeconds: state.breakSeconds }
          )
        )
        clearInterval(this.timerId);
        this.timerId = null;
        return;
      }
      this.timerId = setInterval(() => {
        this.setState({ sessionSeconds: this.state.sessionSeconds - 1 });
      },
      1000);
    }
  }
  componentDidUpdate = () => {
    if(this.state.sessionSeconds === 0) {
      clearInterval(this.timerId);
      document.querySelector('#beep').play();     
      this.setState(state => {
         return {
           sessionSeconds: state.sessionLength * 60,
           inBreak: !state.inBreak,
          }
      });
      this.timerId = setInterval(() => {
        this.setState({ breakSeconds: this.state.breakSeconds - 1 });
      },
      1000);
    }
    if(this.state.breakSeconds === 0) {
      clearInterval(this.timerId);
      document.querySelector('#beep').play();     
      this.setState(state => {
         return {
           breakSeconds: state.breakLength * 60,
           inBreak: !state.inBreak,
          }
      });
      this.timerId = setInterval(() => {
        this.setState({ sessionSeconds: this.state.sessionSeconds - 1 });
      },
      1000);
    }
  }
  componentWillUnmount = () => {
    clearInterval(this.timerId);
  }
  handleOptionsButtons = (e) => {
    if(this.timerId) {
      return;
    }
    const id = e.target.id;
    switch(id) {
      case 'break-increment':
        if(this.state.breakLength >= 60) {
          return;
        }
        this.setState(state => ({
          breakLength: this.state.breakLength + 1,
          breakSeconds: (this.state.breakLength + 1) * 60,
        }));
        break;
      case 'break-decrement':
        if(this.state.breakLength <= 1) {
          return;
        }
        this.setState(state => ({ 
          breakLength: state.breakLength - 1,
          breakSeconds: (state.breakLength - 1) * 60,
        }));
        break;
      case 'session-increment':
        if(this.state.sessionLength >= 60) {
          return;
        }
        this.setState(state => ({
          sessionLength: state.sessionLength + 1,
          sessionSeconds: (state.sessionLength + 1 ) * 60,
        }));
        break;
      case 'session-decrement':
        if(this.state.sessionLength <= 1) {
          return;
        }
        this.setState(state => ({
          sessionLength: state.sessionLength - 1,
          sessionSeconds: (state.sessionLength - 1) * 60,
        }));
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
          sessionSeconds = { this.state.sessionSeconds }
          breakSeconds = { this.state.breakSeconds }
          inBreak = { this.state.inBreak }
        />
        <Buttons
          handleStartButton = { this.handleStartButton }
          handleResetButton = { this.handleResetButton }
        />
        <audio src="beep.wav" id="beep"></audio>
      </div>
    );
  }
}

export default App;
