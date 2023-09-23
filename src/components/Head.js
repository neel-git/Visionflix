import React from "react";
import { HAMBURGER_MENU, USER_LOGO, YOUTUBE_LOGO } from "../utils/constants";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src={HAMBURGER_MENU}
        />
        <img className="h-8 mx-2" alt="youtube-logo" src={YOUTUBE_LOGO} />
      </div>
      <div className="col-span-10 px-10">
        <input
          className="w-1/2 border border-b-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 py-2 px-5 bg-gray-100 rounded-r-full">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img className="h-8" alt="user-logo" src={USER_LOGO} />
      </div>
    </div>
  );
};

export default Head;
