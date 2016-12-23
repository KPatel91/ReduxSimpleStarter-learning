import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props); // props exists in Component super class
        
        this.state = { term: '' };
        // All state needs to be declared in the constructor
    }

    render() {
        return (
            <div className="search-bar">
                <input 
                placeholder="Search videos"
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
