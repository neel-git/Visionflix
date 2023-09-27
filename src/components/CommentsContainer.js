import React from "react";
import { commentData } from "../utils/constants";
import CommentList from "./CommentList";

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2 w-7/12">
      <h1 className="font-bold text-2xl"> Comments: </h1>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
