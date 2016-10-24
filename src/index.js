import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YoutubeSearch from 'youtube-api-search';
import SearchBar from './component/SearchBar';
import VideoList from './component/VideoList';
import VideoDetail from './component/VideoDetail';
const API_KEY = 'AIzaSyDcoZ00DjT_gFUB9-liOVk6QLcoqPpqjZc';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null 
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YoutubeSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0] 
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);


    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));