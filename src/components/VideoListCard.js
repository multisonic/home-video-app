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
                <Link to={`/videos/${video.id}`}>{video.title}</Link>
              </li>
            ))}
          </ul>
          {/* <ul>
            {videoData.map((video) => (
              <li
                key={video.title}
                style={{ cursor: "pointer" }}
                onClick={() =>
                  handleOpenVideo({
                    primary: video.primary,
                    backup: video?.backup,
                    startTime: video.startTime,
                  })
                }
              >
                {video.title}
              </li>
            ))}
          </ul> */}
        </Stack>
      </Card.Body>
    </Card>
  );
}
