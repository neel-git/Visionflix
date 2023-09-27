import React from "react";
import { USER_LOGO } from "../utils/constants";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm mb-2">
      <img className="h-6" alt="user-logo" src={USER_LOGO} />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
