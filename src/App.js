import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Auth from "./components/Auth";
import Header from "./components/Header";
import { supabase } from "./supabaseClient";
import VideoList from "./components/VideoList";
import VideoPageSPA from "./pages/VideoPageSPA";

const queryClient = new QueryClient();

function App() {
  const [session, setSession] = useState(null);
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, [session]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="container" style={{ padding: "50px 0 100px 0" }}>
        {!session ? (
          <Auth />
        ) : (
          <>
            <Header />
            <Container className="my-2 d-flex flex-column">
              <div>
                {" "}
                <b>State</b>:{" "}
                <span>
                  <code>videoId</code> is{" "}
                  <code>{videoId ? videoId : "empty"}</code>
                </span>
              </div>
              {!videoId ? (
                <VideoList setVideoId={setVideoId} />
              ) : (
                <div>
                  <p>a video goes here</p>
                  <button onClick={() => setVideoId(null)}>back</button>
                  <VideoPageSPA videoId={videoId} setVideoId={setVideoId} />
                </div>
              )}
            </Container>
          </>
        )}
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
