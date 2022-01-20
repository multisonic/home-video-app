import { useEffect, useRef, useState } from "react";
import { Button, Container } from "react-bootstrap";
import ReactPlayer from "react-player";
import "./VideoPlayer.css";

export default function VideoPlayer({ urlObject, setUrlObject }) {
  const [url, setUrl] = useState(urlObject.primary);
  const [version, setVersion] = useState("Primary");
  const [playing, setPlaying] = useState(true);
  const [fullScreen, setFullScreen] = useState(false);
  const playerRef = useRef();

  useEffect(() => {
    setUrl(urlObject.primary);
    playerRef.current.seekTo(urlObject.startTime, "seconds");
  }, [urlObject]);

  function toggleBackup() {
    if (version === "Primary") {
      setUrl(urlObject.backup);
      setVersion("Backup");
    } else {
      setUrl(urlObject.primary);
      setVersion("Primary");
    }
    playerRef.current.seekTo(urlObject.startTime, "seconds");
  }

  function jumpToStart() {
    playerRef.current.seekTo(urlObject.startTime, "seconds");
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
          <Button
            variant={playing ? "outline-primary" : "primary"}
            className="me-2"
            onClick={() => setPlaying(!playing)}
          >
            {playing ? "Pause" : "Play"}
          </Button>
          <Button variant="outline-secondary" className="me-2">
            Full Screen
          </Button>
          <Button variant="outline-secondary" onClick={jumpToStart}>
            Jump
          </Button>
        </div>
        <div className="mt-1">
          {urlObject.backup && (
            <Button
              className="me-2 btn-sm"
              variant="outline-primary"
              onClick={toggleBackup}
            >
              Switch to {version === "Primary" ? "Backup" : "Primary"} Video
            </Button>
          )}
          <Button
            variant="outline-secondary"
            className="btn-sm"
            onClick={() => setUrlObject(null)}
          >
            Close Player
          </Button>
        </div>
      </div>
    </>
  );
}
