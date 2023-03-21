import React from "react";
import YouTube from "react-youtube";

const VideoPlayerYoutube = () => {
  const videoId = "your-video-id-here";

  return (
    <div>
      <YouTube videoId={videoId} />
    </div>
  );
};

export default VideoPlayerYoutube;
