import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

const PostContainer = props => {
  return (
    <div className="post-container">
      <div className="post-header">
        <div className="post-thumb-wrapper">
          <img
          alt="post header"
          className="post-thumb"
          src={props.post.thumbnailUrl}
          />
        </div>
        <h2>
          <a>@{props.post.username}</a>
        </h2>
      </div>
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <div className="ui">
        <div className="like">
          <i className="fa fa-heart" />
        </div>
        <div className="comment">
          <i className="fa fa-comment" />
        </div>
      </div>
        <CommentSection comments={props.post.comments} />
    </div>
  );
};

export default PostContainer;