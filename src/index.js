import React from 'react';
import ReactDOM from 'react-dom';
import YoutubeSearch from 'youtube-api-search';

import SearchBar from './component/SearchBar';

const API_KEY = 'AIzaSyDcoZ00DjT_gFUB9-liOVk6QLcoqPpqjZc';

// Create a new componenet. This componenet should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// Take this component's generate
ReactDOM.render(<App />, document.querySelector('.container'));