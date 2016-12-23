// @flow
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

const API_KEY = 'AIzaSyB2jjSK8xI67jSbWeNmuQseKhy0k5Ad2Ys';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('nicki minaj');

    }

    videoSearch(term) {
        YTSearch(
            { key: API_KEY, term: term },
            videos => {
                this.setState({
                    videos: videos,
                    selectedVideo: videos[0]
                });
                // when key is same name as value no need to type videos: videos ({videos})
            }
        );
    }

    render() {
        // throttle function to only run max once every 300ms
        const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300); 
        
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos} />
            </div>
        );
    }
}

// take component's generated HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));