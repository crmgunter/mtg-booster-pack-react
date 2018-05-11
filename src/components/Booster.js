import React, { Component } from 'react';
import axios from 'axios'

class Booster extends Component {
    state = {
        booster: {
          cards: [{
            name: '',
            imageUrl: ''
          }]
        }
      }
    
    getBooster = async () => {
        const res = await axios.get('https://api.magicthegathering.io/v1/sets/xln/booster')
        const booster = res.data
        this.setState({ booster })
        console.log(booster)
      }

    render() {
        return (
            <div>
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

export default Booster;