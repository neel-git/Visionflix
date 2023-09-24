import React from "react";

const VideoCard = ({ info }) => {
  //   console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img
        className="rounded-lg"
        alt="thumnail"
        src={thumbnails?.medium?.url}
      />
      <div className="font-bold py-2">{title}</div>
      <div>{channelTitle}</div>
      <div>{statistics?.viewCount} views</div>
    </div>
  );
};

export default VideoCard;
