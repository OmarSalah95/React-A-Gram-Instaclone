import React from 'react';
import './Comment.css';

const CommentInput = props => {
  return (
      <div className="comment-form">
        <form>
            <input type="text" placeholder="Add comment... " />
        </form>
        <button>Add Comment</button>
      </div>
  );
};

export default CommentInput;