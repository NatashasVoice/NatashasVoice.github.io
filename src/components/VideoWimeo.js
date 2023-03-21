import React from "react";
import ReactPlayer from "react-player";

const VideoVimeo = () => {
  const url = "https://vimeo.com/809295634";

  return (
    <div>
      <ReactPlayer
        url={url}
        width="600px"
        height="600px"
        controls={true}
        config={{
          vimeo: {
            playerOptions: {
              background: 1,
              title: 0,
            },
          },
        }}
      />
    </div>
  );
};

export default VideoVimeo;
