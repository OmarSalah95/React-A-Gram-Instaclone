import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import UISection from './UISection';
import './PostContainer.css';



class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes,
      commentCount: 0
    };
  }

  incrementLike = () => {
    let likes = this.state.likes + 1;
    this.setState({ likes });
};

  render() {
    return (
      <div className="post-container">

        <div className="post-header">
         <div className="post-thumb-wrapper">
          <img
          alt="post header"
           className="post-thumb"
           src={this.props.post.thumbnailUrl}
           />
         </div>
         <h2>
           <a>@{this.props.post.username}</a>
         </h2>
       </div>

        <div className="post-image-wrapper" >
          <img
            alt="post thumbnail"
            className="post-image"
            src={this.props.post.imageUrl}
          />
        </div>

        <UISection
          incrementLike={this.incrementLike}
          likes={this.state.likes}
        />

        <CommentSection 
            comments={this.props.post.comments}  
        />
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string
  })
};

export default Post;
