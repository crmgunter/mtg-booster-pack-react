import React, { Component } from "react";
import axios from "axios";
import Booster from './Booster'

class Dropdown extends Component {
  state = {
      cards: [{
          name: '',
          imageUrl: ''
      }],
    value: "",
    allSets: {
      sets: [
        {
          code: "",
          name: ""
        }
      ]
    }
  };

  async componentDidMount() {
    this.getAllSets();
  }

  handleChange = async event => {
    await this.setState({value: event.target.value})
    console.log(this.state.value)
    const res = await axios.get(`https://api.magicthegathering.io/v1/sets/${this.state.value}/booster`)
    const singleSet = res.data
    await this.setState( singleSet )
    console.log(singleSet)
  };

  getAllSets = async () => {
    const res = await axios.get("https://api.magicthegathering.io/v1/sets");
    const allSets = res.data;
    this.setState({ allSets });
    console.log(allSets);
  };

  render() {
    return (
      <div>
          <form>
        <select
          name="sets"
          value={this.state.value}
          onChange={this.handleChange}
        >
          {this.state.allSets.sets.map(set => (
            <option value={set.code}>{set.name}</option>
          ))}
        </select>
        <button>Select</button>
        </form>
        <div>
            {this.state.cards ? (<div>
                {this.state.cards.map((card) => (
                    <div>
                    <div>{card.name}</div>
                    <div><img src={card.imageUrl} /></div>
                    </div>
                ))}
            </div>) : null}     
        </div>
      </div>
    );
  }
}

export default Dropdown;
