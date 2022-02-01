import { Card, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getVideos } from "../VideoData";

export default function VideoListCard({ handleOpenVideo }) {
  let videos = getVideos();
  return (
    <Card className="">
      <Card.Body>
        <Card.Title>
          <div>List of Videos</div>
        </Card.Title>
        <Stack direction="vertical" gap="2">
          <ul>
            {videos.map((video) => (
              <li>
                <Link to={`/videos/${video.slug}`}>{video.title}</Link>
              </li>
            ))}
          </ul>
        </Stack>
      </Card.Body>
    </Card>
  );
}
