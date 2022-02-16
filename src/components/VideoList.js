import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Card, Stack } from "react-bootstrap";
import useVideos from "../hooks/useVideos";

export default function VideoList({ setVideoId }) {
  const { status, data, error, isFetching } = useVideos();
  dayjs.extend(relativeTime);

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
                <span className="text-muted">
                  {"   "}
                  {dayjs(video.date_post).fromNow()}
                </span>
              </li>
            ))}
          </ul>
        </Stack>
      </Card.Body>
    </Card>
  );
}
