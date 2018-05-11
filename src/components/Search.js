import React, { Component } from "react";
import axios from "axios";

class Search extends Component {
  state = {
    value: "",
    set: "",
    allSets: {
      sets: [
        {
          code: "",
          name: ""
        }
      ]
    }
  };

  componentDidMount() {
    this.getAllSets();
  }

  getAllSets = async () => {
    const res = await axios.get("https://api.magicthegathering.io/v1/sets");
    const allSets = res.data;
    this.setState({ allSets });
    console.log(this.state);
  };

  handleChange = async event => {
    await this.setState({value: event.target.value})
    const res = await axios.get("https://api.magicthegathering.io/v1/sets")
    console.log(res.data)
    this.state.allSets.sets.map((set) => {
        const setToSearch = set.code
    })
  };

  handleSubmit = async event => {
    event.preventDefault();
    const res = await axios.get(
      `https://api.magicthegathering.io/v1/sets/`
    );
    console.log(res.data);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            name="set"
            placeholder="What set are you looking for?"
            value={this.state.value}
          />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
