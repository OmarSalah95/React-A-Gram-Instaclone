
import React from 'react';
import Post from './Post';
import './PostContainer.css';

const PostsContainer = props => {
  return (
    <div className="posts-container-wrapper">
      {props.posts.map(post => 
      <Post key={post.username + post.imageURL } post={post} />
      )}
    </div>
  );
};

export default PostsContainer;
