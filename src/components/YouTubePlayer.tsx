import React from "react";
import ReactPlayer from "react-player";

const YouTubePlayer = () => {
  return (
    <div className="px-8 w-screen h-screen flex justify-center items-center">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=NyKSdCvlIVA"
        width="100%"
        height="100%"
        playing={true} // Auto-plays the video
        controls={true} // Enables player controls
      />
    </div>
  );
};

export default YouTubePlayer;
