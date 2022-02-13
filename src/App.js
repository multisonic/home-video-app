import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Account from "./components/Account";
import Auth from "./components/Auth";
import Header from "./components/Header";
import EditVideoPage from "./pages/EditVideoPage";
import HomePage from "./pages/HomePage";
import VideoPage from "./pages/VideoPage";
import { supabase } from "./supabaseClient";

const queryClient = new QueryClient();

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
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
                    element={
                      <Account key={session.user.id} session={session} />
                    }
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
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
