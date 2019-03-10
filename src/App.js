import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header1 from './components/Header1.js';
import SideNavigation from './components/SideNavigation';
import NewHeader from './components/NewHeader';



class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<header className="App-header">
         {/*<img src={logo} className="App-logo" alt="logo" /> }
          <h1 className="App-title">Priyanka Arora</h1>
          <h3><i>Full Stack Developer</i></h3>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}

        <NewHeader />
        {/*<SideNavigation />*/}

      </div>
    );
  }
}




export default App;
