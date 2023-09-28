import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomMessages } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    //API Polling
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessages(45),
        })
      );
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full h-[500px] border ml-2 p-2 bg-slate-100 rounded-md border-black overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((chat, index) => (
            <ChatMessage key={index} name={chat.name} message={chat.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(`form ${liveMessage}`);
          dispatch(
            addMessage({
              name: "Neelkamal",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          placeholder="Your message"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
          className="px-2 w-96"
        />
        <button className="px-2 mx-2 bg-green-300 rounded-md shadow-sm">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
