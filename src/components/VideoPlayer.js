import { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import ReactPlayer from "react-player";
import "./VideoPlayer.css";

export default function VideoPlayer({ video }) {
  const [url, setUrl] = useState(video.primary);
  const [version, setVersion] = useState("Primary");
  const [playing, setPlaying] = useState(true);
  const playerRef = useRef();

  useEffect(() => {
    jumpToTime(video.startTime);
  }, [url]);

  function toggleBackup() {
    if (version === "Primary") {
      setUrl(video.backup);
      setVersion("Backup");
    } else {
      setUrl(video.primary);
      setVersion("Primary");
    }
    // jumpToTime(video.startTime);
  }

  function jumpToTime(timeInSeconds) {
    playerRef.current.seekTo(timeInSeconds, "seconds");
  }

  return (
    <>
      <div className="darkmode-ignore player-wrapper">
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
      <div className="mb-3 d-flex flex-column align-items-center">
        <div className="mt-1">
          {/* <Button
            variant={playing ? "outline-primary" : "primary"}
            className="me-2"
            onClick={() => setPlaying(!playing)}
          >
            {playing ? "Pause" : "Play"}
          </Button>
          <Button variant="outline-secondary" className="me-2">
            Full Screen
          </Button> */}
          {/* <Button variant="outline-secondary" onClick={jumpToStart}>
            Jump
          </Button> */}
        </div>
        <div className="mt-1">
          {video.backup && (
            <Button
              className="me-2 btn-sm"
              variant="outline-primary"
              onClick={toggleBackup}
            >
              Switch to {version === "Primary" ? "Backup" : "Primary"} Video
            </Button>
          )}
          {/* <Button
            variant="outline-secondary"
            className="btn-sm"
            onClick={() => setUrlObject(null)}
          >
            Close Player
          </Button> */}
        </div>
      </div>
    </>
  );
}
