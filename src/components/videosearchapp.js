import React, { useState } from 'react';
import videosData from '../data/videos.json';

const VideoSearchApp = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Split the sentence into individual words
    const words = searchInput.toLowerCase().split(' ');
  
    // Perform search based on the sentence
    const results = videosData.filter((video) => {
      // Check if any of the video tags match the words in the sentence
      return words.some((word) => video.tags.includes(word));
    });
  
    // Update the search results state
    setSearchResults(results);
  };

  return (
    <div className='search'>
      <h1 className='search-heading'>Video Search App</h1>
    <input
        type="text"
        placeholder="Enter a sentence"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div id="search-results">
        {searchResults.map((video) => (
          <div key={video.id} className="card" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">{video.title}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                {video.tags.join(', ')}
              </h6>
              <iframe width="250" height="150" src={video.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <p className="card-text">{video.description}</p>
                Watch Video
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoSearchApp;
