import { Button, Container, Stack } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import VideoPage from "./pages/VideoPage";

function App() {
  return (
    <>
      <Header />
      <Container className="my-2 d-flex flex-column">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/videos/" element={<VideoPage />}>
              <Route path=":slug" element={<VideoPage />} />
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
    </>
  );
}

export default App;
