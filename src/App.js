import Darkmode from "darkmode-js";
import { useState } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VideoListCard from "./components/VideoListCard";
import VideoPlayer from "./components/VideoPlayer";
import HomePage from "./pages/HomePage";
import VideoPage from "./pages/VideoPage";

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
        <div className="fs-5 me-auto">
          <a href="/">Home Video App</a>
        </div>
        <Button>Test</Button>
      </Stack>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/videos/" element={<VideoPage />}>
            <Route path=":videoId" element={<VideoPage />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </Router>
      {/* {urlObject && (
        <VideoPlayer urlObject={urlObject} setUrlObject={setUrlObject} />
      )}
      <VideoListCard handleOpenVideo={handleOpenVideo} /> */}
    </Container>
  );
}

export default App;
