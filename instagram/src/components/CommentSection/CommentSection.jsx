import React from 'react';
import Comment from './Comment';
import CommentInput from './CommentForm';
import PropTypes from 'prop-types';
import moment from 'moment'
import './Comment.css';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      commentInput: ''
    };
  }

  componentDidMount() {
    this.setState({ comments: this.props.comments });
  }

  addComment = e => {
    e.preventDefault();

    const newComment = {
      username: localStorage.getItem('user'),
      text: this.state.commentInput,
      timestamp: moment().format('M/D/YYYY, h:mm:ss a')
    }
//  Spread the existing array adding the new comment    
    this.setState({
      comments: [...this.state.comments, newComment],
      commentInput: '',
    },
    
  );
};

handleChanges = e => {
  this.setState({
    [e.target.name]: e.target.value,
    commentCount: this.state.comments.length
  });
};

  render() {
    return (
      <div className='comment-section'>
        {this.state.comments.map((comment) => 
            <Comment key={comment.username + comment.timestamp} comment={comment} />
        )}
        <CommentInput 
          addComment={this.addComment} 
          commentInput={this.state.commentInput} 
          handleChanges={this.handleChanges} 
        />
      </div>
    );
  }
}


CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ 
      text: PropTypes.string, 
      username: PropTypes.string 
    })
  )
};

export default CommentSection;