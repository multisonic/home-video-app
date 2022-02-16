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
  const [title, setTitle] = useState("The Home Video App");

  useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, [session]);

  useEffect(() => {
    // This will run when the page first loads and whenever the title changes
    document.title = title;
  }, [title]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="container" style={{ padding: "50px 0 100px 0" }}>
        {!session ? (
          <Auth />
        ) : (
          <>
            <Header />
            <Container className="my-2 d-flex flex-column">
              {/* <div>
                {" "}
                <b>State</b>:{" "}
                <span>
                  <code>videoId</code> is{" "}
                  <code>{videoId ? videoId : "empty"}</code>
                </span>
              </div> */}
              {!videoId ? (
                <VideoList setVideoId={setVideoId} />
              ) : (
                <div>
                  <button
                    onClick={() => {
                      setVideoId(null);
                      setTitle("The Home Video App");
                    }}
                  >
                    back
                  </button>
                  <VideoPageSPA
                    videoId={videoId}
                    setVideoId={setVideoId}
                    setTitle={setTitle}
                  />
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
