import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img src={imageUrl} alt="" className="media-object" />
        </div>

        <div class="media-body">
          <div class="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
