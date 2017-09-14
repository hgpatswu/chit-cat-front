import React, { Component } from 'react';
import logo from './assets/logo.png';
import './App.css';
import LoginPage from './users/LoginPage'

class App extends Component {
  render() {
      return (
          <div>
              <div className="App">
                  <div className="App-header">
                      <img src={logo} className="App-logo" alt="logo" />
                      <h2>Welcome to Tencent CHIT</h2>
                  </div>
              </div>

              <LoginPage/>
          </div>
      );
  }
}

export default App;
