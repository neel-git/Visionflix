import React from "react";
import { USER_LOGO } from "../utils/constants";

const Comments = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div
      className="flex py-4 shadow-md
    bg-gray-100 p-2 rounded-md m-2"
    >
      <img alt="user-icon" src={USER_LOGO} className="h-7 w-7" />
      <div className="px-3">
        <p>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comments;
