import React from 'react';
import './Comment.css';

const CommentInput = props => {
  return (
      <>
        <form className="comment-form" onSubmit={props.addComment}>
            <input
            type="text" 
            placeholder="Add comment... "
            value={props.commentInput}
            name="commentInput"
            onChange={props.handleChanges} 
            />
        <button type='submit' >Add Comment</button>
        </form>
      </>
  );
};

export default CommentInput;