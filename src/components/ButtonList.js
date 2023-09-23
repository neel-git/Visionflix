import React from "react";
import Button from "./Button";

const list = [
  "All",
  "News",
  "Ravish Kumar",
  "Debates",
  "Computer Programming",
  "Shahrukh Khan",
  "Music",
  "Live",
  "Mixes",
  "Cricket",
  "Cooking",
  "Music",
  "Boxing",
  "Javascript",
];
const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((btnName, index) => (
        <Button key={index} name={btnName} />
      ))}
    </div>
  );
};

export default ButtonList;
