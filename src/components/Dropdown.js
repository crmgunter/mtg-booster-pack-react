import React, { Component } from "react";
import axios from "axios";
import Booster from "./Booster";
import styled from "styled-components";

const Flex = styled.div`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
margin: 10px;
`

class Dropdown extends Component {
  state = {
    cards: [
      {
        name: "",
        imageUrl: ""
      }
    ],
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
    try {
      await this.setState({ value: event.target.value });
      console.log(this.state.value);
      const res = await axios.get(
        `https://api.magicthegathering.io/v1/sets/${this.state.value}/booster`
      );
      const singleSet = res.data;
      await this.setState(singleSet);
      console.log(singleSet);
    } catch (error) {
      console.log(error);
      this.setState(error);
    }
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
            {this.state.allSets.sets.map(set => {
              if (set.type === "expansion" || set.type === "un") {
                return <option value={set.code}>{set.name}</option>;
              }
            })}
          </select>
        </form>
        <div>
          {this.state.cards ? (
            <Flex>
              {this.state.cards.map(card => (
                  <div>
                    <img src={card.imageUrl} />
                  </div>
              ))}
            </Flex>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Dropdown;
