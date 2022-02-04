import { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import ReactPlayer from "react-player";
import "./VideoPlayer.css";

export default function VideoPlayer({ url, time }) {
  const [playing, setPlaying] = useState(true);
  const playerRef = useRef();

  useEffect(() => {
    jumpToTime(time);
    setPlaying(true);
  }, [url, time]);

  function jumpToTime(timeInSeconds) {
    playerRef.current.seekTo(timeInSeconds, "seconds");
  }

  return (
    <>
      <div className="darkmode-ignore player-wrapper mb-3">
        <ReactPlayer
          ref={playerRef}
          controls
          url={url}
          playing={playing}
          className="react-player"
          height="100%"
          width="100%"
        />
      </div>
    </>
  );
}
