import React, { useEffect, useRef } from "react";
import Vimeo from "@vimeo/player";

const VideoPlayer = () => {
  const playerRef = useRef(null);

  useEffect(() => {
    const player = new Vimeo(playerRef.current, {
      id: "810259859",
    });
  }, []);

  return (
    <div>
      <div ref={playerRef}></div>
    </div>
  );
};

export default VideoPlayer;
