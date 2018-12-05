import React from "react";

import "./VideoPlayer.css";

import PropTypes from "prop-types";

/*import { Player } from "video-react";
import "video-react/dist/video-react.css";*/

//<Player autoPlay preload poster={props.cover} src={props.video} />

function VideoPlayer(props) {
  return (
    <div className="video">
      <iframe
        className="video"
        src={props.video}
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
      />
    </div>
  );
}

VideoPlayer.PropTypes = {
  video: PropTypes.string.isRequired
};

export default VideoPlayer;
