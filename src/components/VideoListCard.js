import { Card, Stack } from "react-bootstrap";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { fetchVideos } from "../supabaseClient";

export default function VideoListCard({ type }) {
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery("videoList", () => fetchVideos());

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  return (
    <Card className="">
      <Card.Body>
        <Card.Title>
          <div>List of Videos</div>
        </Card.Title>
        <Stack direction="vertical" gap="2">
          <ul>
            {videos.map((video) => (
              <li key={video.id}>
                <Link to={`/videos/${video.slug}`}>{video.title}</Link> (
                <Link to={`/videos/${video.slug}/edit`}>Edit</Link>)
              </li>
            ))}
          </ul>
        </Stack>
      </Card.Body>
    </Card>
  );
}
