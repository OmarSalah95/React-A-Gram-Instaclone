import React from 'react';

const CommentInput = props => {
  return (
      <>
        <form>
            <input type="text" placeholder="Add comment... " />
        </form>
        <button>Add Comment.</button>
    </>
  );
};

export default CommentInput;