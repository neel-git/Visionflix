import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  useEffect(() => {
    //API Polling
    const interval = setInterval(() => {
      console.log(`API Polling`);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full h-[500px] border ml-2 p-2 bg-slate-100 rounded-md border-black">
      <ChatMessage
        name="Neelkamal"
        message="This is just to test the live chat feature"
      />
    </div>
  );
};

export default LiveChat;
