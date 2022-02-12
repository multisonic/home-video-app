import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Account from "./components/Account";
import Auth from "./components/Auth";
import Header from "./components/Header";
import EditVideoPage from "./pages/EditVideoPage";
import HomePage from "./pages/HomePage";
import VideoPage from "./pages/VideoPage";
import { fetchVideos, supabase } from "./supabaseClient";
import { useVideoStore } from "./appStore";

function App() {
  const useVideos = () => useVideoStore((state) => state.setVideos);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(false);

  async function addFromVideos(type) {
    let videoData = await fetchVideos();
    // setVideos(videoData);
    useVideos(videoData);
    setLoading(false);
  }

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    getVideos();
    setLoading(false);
  }, [session]);

  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      {!session ? (
        <Auth />
      ) : (
        <>
          <Header />
          <Container className="my-2 d-flex flex-column">
            <Router>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="videos">
                  <Route path=":slug" element={<VideoPage />} />
                  <Route path=":slug/edit" element={<EditVideoPage />} />
                </Route>
                <Route
                  path="/account"
                  element={<Account key={session.user.id} session={session} />}
                />
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
      )}
    </div>
  );
}

export default App;
