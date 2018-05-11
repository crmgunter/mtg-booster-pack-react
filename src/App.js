import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Booster from './components/Booster'
import Search from './components/Search'
import Dropdown from './components/Dropdown';

class App extends Component {

  //get all sets
  //plug sets into drop down list
  //when set is selected generate booster for set

  //OR

  //search for set
  //search is entered into query param
  //


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hi, Chris. Are you ready to get started?</h1>
        </header>
        {/* <Search /> */}
        <Dropdown/>
        <Booster />
      </div>
    );
  }
}

export default App;
