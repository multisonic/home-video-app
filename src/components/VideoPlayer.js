import { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import ReactPlayer from "react-player";
import "./VideoPlayer.css";

export default function VideoPlayer({ url, time, autoplay = true }) {
  const [playing, setPlaying] = useState(autoplay);
  const playerRef = useRef();

  useEffect(() => {
    if (time > 0) {
      jumpToTime(time);
    }
    if (autoplay) {
      setPlaying(true);
    }
  }, [url, time]);

  function jumpToTime(timeInSeconds) {
    playerRef.current.seekTo(timeInSeconds, "seconds");
  }
  return (
    <>
      <div className="darkmode-ignore player-wrapper mb-3 bg-secondary bg-gradient">
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
