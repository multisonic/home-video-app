import { useState, useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Stack,
  Table,
} from "react-bootstrap";
import VideoPlayer from "../components/VideoPlayer";
import useVideo from "../hooks/useVideo";
import { timeFormatter } from "../utils";
import "./VideoPage.css";

export default function VideoPage({ videoId, setVideoId, setTitle }) {
  const { status, data: video, error, isFetching } = useVideo(videoId);
  console.log(video);
  const [url, setUrl] = useState(null);
  const [version, setVersion] = useState("Primary");
  const [time, setTime] = useState(null);

  function toggleBackup() {
    if (version === "Primary") {
      setUrl(video.url_backup);
      setVersion("Backup");
    } else {
      setUrl(video.url_primary);
      setVersion("Primary");
    }
  }

  useEffect(() => {
    if (video) {
      setTime(video.start_time);
      setUrl(video.url_primary);
      setTitle(`${video.title} | The Home Video App`);
    }
  }, [video]);

  if (status === "loading") return "Loading...";
  if (status === "error") return `Error: ${error.message}`;

  return (
    <>
      <VideoPlayer url={url} time={time} />
      <h1>{video.title}</h1>
      <button
        onClick={() => {
          setVideoId(null);
          setTitle("The Home Video App");
        }}
      >
        back
      </button>
      <Container>
        <Row>
          <Col xxl={9} xl={8} lg={8} md={7}>
            <div className="mb-3">
              <h2 className="section-header px-1">Dates</h2>
              <Stack direction="horizontal" gap="2">
                <div className="border border-dark rounded px-2">
                  Post Date: {video.date_post}
                </div>
                <div className="border border-dark rounded px-2">
                  Event Date: {video.date_event}
                </div>
              </Stack>
            </div>
            <div className="mb-3">
              <h2 className="section-header px-1">Description</h2>
              <p styles={{ whiteSpace: "pre-wrap" }}>
                This video has no description, so here is some LOREM TEXT. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
                optio repellendus deserunt inventore, ratione temporibus
                voluptatem ullam repellat. Id, libero animi? Perspiciatis, nulla
                numquam. Aspernatur est alias esse iusto doloribus! Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Possimus, libero
                natus quae minima quidem veritatis impedit ullam nobis fugit
                reprehenderit. Corporis, ipsum? Pariatur debitis id repellat
                nisi expedita beatae qui.
              </p>
            </div>
            <div className="mb-3">
              <h2 className="section-header px-1">People</h2>
              <Stack direction="horizontal" gap="2">
                <div className="border border-dark rounded px-2">Clifflix</div>
              </Stack>
            </div>
            <div className="mb-3">
              <h2 className="section-header px-1">Places</h2>
              <Stack direction="horizontal" gap="2">
                <div className="border border-dark rounded px-2">
                  Walt Disney World
                </div>
                <div className="border border-dark rounded px-2">Florida</div>
                <div className="border border-dark rounded px-2">
                  United States
                </div>
              </Stack>
            </div>
          </Col>
          <Col>
            {video.chapters && (
              <VideoChapters chapters={video.chapters} setTime={setTime} />
            )}
            <div className="d-grid gap-2">
              {video.url_backup && (
                <Button
                  onClick={toggleBackup}
                  size="sm"
                  className="mt-2"
                  variant="outline-primary"
                >
                  Switch to {version === "Primary" ? "Backup" : "Primary"} Video
                </Button>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export function VideoChapters({ chapters, setTime }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Chapters</Card.Title>
        <Table striped hover size="sm">
          <tbody>
            {chapters?.map((chapter) => (
              <tr
                onClick={() => setTime(chapter.time)}
                style={{ cursor: "pointer" }}
              >
                <td>{timeFormatter(chapter.time)}</td>
                <td>{chapter.title}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}
