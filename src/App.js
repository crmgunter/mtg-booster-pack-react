import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Booster from './components/Booster'
import Dropdown from './components/Dropdown';
import styled from 'styled-components'

const DescriptionStyles = styled.div`
max-width: 50vw;
margin: 20px auto;
`

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hi. This is a fun little practice app. Select a set, crack a pack!</h1>
          
        </header>
        <DescriptionStyles>
        <p>This app makes front end calls to the <a href="https://magicthegathering.io/">Magic the Gathering API</a> to grab MTG sets and create booster packs of a specific number of cards based on the expansion selected. 
        Eventually I'd like to set up a draft simulation type deal.
        <br/><br/>
        <a href="https://github.com/crmgunter/mtg-booster-pack-react">Check out the code if you wanna.</a>
        <br/><br/>
        I promise I don't live in my mom's basement.</p>
        </DescriptionStyles>
        <Dropdown/>
        {/* <Booster /> */}
      </div>
    );
  }
}

export default App;
