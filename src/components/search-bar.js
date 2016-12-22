import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props); // props exists in Component super class
        
        this.state = { term: 'Search videos' };
        // All state needs to be declared in the constructor
    }

    render() {
        return (
            <div>
                <input 
                value={this.state.term}
                onChange={event => this.setState({ term: event.target.value })} />
            </div>
        );
    }

}

export default SearchBar;
