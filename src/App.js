import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import Header from "./components/Header";
import { supabase } from "./supabaseClient";
import VideoList from "./components/VideoList";
import VideoPageSPA from "./pages/VideoPageSPA";
import HomePage from "./pages/HomePage";
import VideoPage from "./pages/VideoPage";
import EditVideoPage from "./pages/EditVideoPage";
import Account from "./components/Account";

const queryClient = new QueryClient();

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, [session]);

  document.title = "The Home Video App";

  return (
    <QueryClientProvider client={queryClient}>
      <div className="container" style={{ padding: "10px 0 100px 0" }}>
        {!session ? (
          <Auth />
        ) : (
          <>
            <Container className="my-2 d-flex flex-column">
              <Router>
                <Header />
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
                        <p>
                          <b>404.</b> There's nothing here!
                        </p>
                      </main>
                    }
                  />
                </Routes>
              </Router>
            </Container>
          </>
        )}
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
