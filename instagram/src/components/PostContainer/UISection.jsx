
import React from 'react';
import './PostContainer.css'

const UISection = props => {
  return (
    <div
      className="ui"
      key="likes-icons-container"
      
    >
      <div className="like" onClick={props.incrementLike}>
        <i className="fa fa-heart" />
      </div>
        <span className="like-counter">{props.likes}</span>
      <div className="comment">
        <i className="fa fa-comment" />
      </div>
    </div>
  );
};

export default UISection;
