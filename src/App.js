import { useState } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import VideoListCard from "./components/VideoListCard";
import VideoPlayer from "./components/VideoPlayer";
import Darkmode from "darkmode-js";

function App() {
  new Darkmode().showWidget();
  const [urlObject, setUrlObject] = useState(null);

  function handleOpenVideo(object) {
    setUrlObject(null);
    setUrlObject(object);
  }

  return (
    <Container className="my-2 d-flex flex-column">
      <Stack direction="horizontal" gap="2" className="mb-3">
        <div className="fs-5 me-auto">Home Video App</div>
        <Button>Test</Button>
      </Stack>
      {urlObject && (
        <VideoPlayer urlObject={urlObject} setUrlObject={setUrlObject} />
      )}
      <VideoListCard handleOpenVideo={handleOpenVideo} />
    </Container>
  );
}

export default App;
