import React from "react";

function Comment({ comment }) {
  return (
    <div>
      <p>{comment.comment}</p>
      <p>{`- ${comment.user}`}</p>
    </div>
  );
}

export default Comment;