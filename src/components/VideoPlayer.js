import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import ReactPlayer from "react-player";
import "./VideoPlayer.css";

export default function VideoPlayer({ urlObject, setUrlObject }) {
  const [url, setUrl] = useState(urlObject.primary);
  const [playing, setPlaying] = useState(true);
  const [fullScreen, setFullScreen] = useState(false);

  return (
    <>
      <div className="darkmode-ignore player-wrapper">
        <ReactPlayer
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
            className="me-2"
            disabled={playing ? true : false}
            onClick={() => setPlaying(true)}
          >
            Play
          </Button>
          <Button
            className="me-2"
            disabled={playing ? false : true}
            onClick={() => setPlaying(false)}
          >
            Pause
          </Button>
          <Button variant="outline-secondary">Full Screen</Button>
        </div>
        <div className="mt-1">
          {urlObject.backup && (
            <Button
              className="me-2 btn-sm"
              variant="outline-primary"
              onClick={() => setUrl(urlObject.backup)}
            >
              Backup Video
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
