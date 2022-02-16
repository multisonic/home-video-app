import { useEffect, useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useQueryClient,
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import VideoPlayer from "./components/VideoPlayer";
import { supabase } from "./supabaseClient";

const queryClient = new QueryClient();

export default function App() {
  const [session, setSession] = useState(null);
  const [videoId, setVideoId] = useState(-1);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, [session]);

  return (
    <QueryClientProvider client={queryClient}>
      {!session ? (
        <div>you are not logged in!</div>
      ) : (
        <div>
          <p>you're logged in!</p>
          <p>
            The <code>videoId</code> in state is <code>{videoId}</code>
          </p>
          {videoId !== -1 ? (
            <Video videoId={videoId} setVideoId={setVideoId} />
          ) : (
            <Videos setVideoId={setVideoId} />
          )}
        </div>
      )}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

function useVideos() {
  return useQuery("videos", async () => {
    const { data } = await supabase.from("videos").select("*");
    return data;
  });
}

function Videos({ setVideoId }) {
  const queryClient = useQueryClient();
  const { status, data, error, isFetching } = useVideos();

  return (
    <div>
      <h1>The Video List</h1>
      <div>
        {status === "loading" ? (
          "Loading..."
        ) : status === "error" ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            <div>
              {data.map((video) => (
                <p key={video.id}>
                  <a
                    onClick={() => setVideoId(video.id)}
                    href="#"
                    style={
                      // here we can access the query data to show bold links
                      // for cached video data
                      queryClient.getQueryData(["video", video.id])
                        ? { fontWeight: "bold", color: "green" }
                        : {}
                    }
                  >
                    {video.title}
                  </a>
                </p>
              ))}
            </div>
            <div>{isFetching ? "Background updating..." : " "}</div>
          </>
        )}
      </div>
    </div>
  );
}

const getVideoById = async (id) => {
  const { data } = await supabase
    .from("videos")
    .select("*")
    .eq("id", id)
    .single();

  return data;
};

function useVideo(videoId) {
  return useQuery(["video", videoId], () => getVideoById(videoId), {
    enabled: !!videoId,
  });
}

function Video({ videoId, setVideoId }) {
  const { status, data, error, isFetching } = useVideo(videoId);

  return (
    <div>
      <div>
        <a onClick={() => setVideoId(-1)} href="#">
          Back
        </a>
      </div>
      {!videoId || status === "loading" ? (
        "Loading..."
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <h1>{data.title}</h1>
          <div>
            <p>
              <VideoPlayer url={data.url_primary} />
            </p>
          </div>
          <div>{isFetching ? "Background Updating..." : " "}</div>
        </>
      )}
    </div>
  );
}
