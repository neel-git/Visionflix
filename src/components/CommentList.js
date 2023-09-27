import React from "react";
import Comments from "./Comments";

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <div key={index}>
          <Comments data={comment} />
          <div className="pl-5 border border-l-black ml-5">
            <CommentList comments={comment.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
