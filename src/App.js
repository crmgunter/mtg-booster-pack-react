import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  // booster{cards[{}]}
  state = {
    booster: {
      cards: [{
        name: '',
        imageUrl: ''
      }]
    }
  }

  // async componentDidMount () {
  //   this.getBooster()
  // }

  getBooster = async () => {
    const res = await axios.get('https://api.magicthegathering.io/v1/sets/ust/booster')
    const booster = res.data
    this.setState({ booster })
    console.log(booster)
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hi, Chris. Are you ready to get started?</h1>
        </header>
        <button onClick={this.getBooster}>Crack a pack!</button>
        
          {this.state.booster.cards.map((booster) => (
            <div>
            <div>{booster.name}</div>
            <div><img src={booster.imageUrl} /></div>
            </div>
          ))}
      </div>
    );
  }
}

export default App;
