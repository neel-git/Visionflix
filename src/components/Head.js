import React, { useEffect, useState } from "react";
import {
  HAMBURGER_MENU,
  USER_LOGO,
  YOUTUBE_LOGO,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { BiSearch } from "react-icons/bi";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    //make an api call after every keypress
    //but if the diff b/w 2 API call is <200ms
    //decline the API call

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 250);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("API Call " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    //update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

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
        <div>
          <input
            className="w-1/2 border border-b-gray-400 p-2 rounded-l-full h-10"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="border border-gray-400 py-1 px-5 bg-gray-100 rounded-r-full h-10">
            <BiSearch />
          </button>
        </div>
        <div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rou border-gray-200">
          <ul>
            {suggestions.map((s) => (
              <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                <div className="flex">
                  <span className="px-1 py-2">
                    <BiSearch />
                  </span>
                  <span className="py-1">{s}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-span-1">
        <img className="h-8" alt="user-logo" src={USER_LOGO} />
      </div>
    </div>
  );
};

export default Head;
