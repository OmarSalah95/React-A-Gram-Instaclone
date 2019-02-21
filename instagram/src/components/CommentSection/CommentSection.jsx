import React from 'react';
import Comment from './Comment';
import CommentInput from './CommentForm';
import PropTypes from 'prop-types';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
    };
  }
  render() {
    return (
      <div className='comment-section'>
        {this.state.comments.map((comment, index) => 
            <Comment key={index} comment={comment} />
        )}
        <CommentInput />
      </div>
    );
  }
}


CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;