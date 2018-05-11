    import React, { Component } from 'react';
    import axios from 'axios'

    class Search extends Component {
        state = {
            set: ''
        }

        handleChange = event => {
            const newState = { ...this.state }
            newState[event.target.name] = event.target.value
            this.setState(newState)
            console.log(this.state)
        }

        handleSubmit = async event => {
            event.preventDefault()
            const set = this.state.set
            const res = await axios.get(`https://api.magicthegathering.io/v1/sets/${set}`)

            console.log(res.data)
        }

        render() {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input
                        onChange={this.handleChange}
                        type="text"
                        name="set"
                        placeholder="What set are you looking for?" 
                        value={this.state.set}/>
                        <button>Search</button>
                    </form>
                </div>
            );
        }
    }
    
    export default Search;