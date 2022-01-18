import { useState } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import VideoListCard from "./components/VideoListCard";
import VideoPlayer from "./components/VideoPlayer";
import Darkmode from "darkmode-js";

function App() {
  new Darkmode().showWidget();
  const [urlObject, setUrlObject] = useState(null);

  return (
    <Container className="my-2">
      <Stack direction="horizontal" gap="2" className="mb-3">
        <div className="fs-5 me-auto">Home Video App</div>
        <Button>Test</Button>
      </Stack>
      {urlObject && (
        <VideoPlayer urlObject={urlObject} setUrlObject={setUrlObject} />
      )}
      <VideoListCard setUrlObject={setUrlObject} />
    </Container>
  );
}

export default App;
