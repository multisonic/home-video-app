import { Card, Stack } from "react-bootstrap";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { fetchVideos } from "../supabaseClient";
import useVideos from "../hooks/useVideos";

export default function VideoList({ setVideoId }) {
  const { status, data, error, isFetching } = useVideos();

  if (status === "loading") return "Loading...";
  if (status === "error") return "An error has occurred: " + error.message;
  return (
    <Card className="">
      <Card.Body>
        <Card.Title>
          <div>List of Videos</div>
        </Card.Title>
        <Stack direction="vertical" gap="2">
          <ul>
            {data.map((video) => (
              <li key={video.id}>
                <a onClick={() => setVideoId(video.id)} href="#">
                  {video.title}
                </a>
                {/* <Link to={`/videos/${video.slug}`}>{video.title}</Link> (
                <Link to={`/videos/${video.slug}/edit`}>Edit</Link>) */}
              </li>
            ))}
          </ul>
        </Stack>
      </Card.Body>
    </Card>
  );
}
