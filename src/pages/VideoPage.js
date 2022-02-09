import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Stack,
  Table,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import { fetchVideoBySlug } from "../supabaseClient";
import { timeFormatter } from "../utils";
import "./VideoPage.css";

export default function VideoPage() {
  let params = useParams();
  const [video, setVideo] = useState([]);
  const [url, setUrl] = useState(null);
  const [version, setVersion] = useState("Primary");
  const [time, setTime] = useState(0);
  const [loading, setLoading] = useState(true);
  const [chapters, setChapters] = useState([]);

  async function getVideo(slug) {
    setLoading(true);
    let videoData = await fetchVideoBySlug(slug);
    setVideo(videoData);
    setChapters(videoData.chapters);
    setUrl(videoData.url_primary);
    setTime(videoData.start_time);
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    getVideo(params.slug);
    console.log(video);
    setLoading(false);
  }, []);

  function toggleBackup() {
    if (version === "Primary") {
      setUrl(video.url_backup);
      setVersion("Backup");
    } else {
      setUrl(video.url_primary);
      setVersion("Primary");
    }
    // jumpToTime(video.startTime);
  }

  if (loading) return "Loading...";

  return (
    <>
      {url && <VideoPlayer url={url} time={time} />}
      <h1>{video.title}</h1>
      {/* <hr /> */}
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
                {video.description
                  ? video.description
                  : "This video has no description, so here is some LOREM TEXT. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit optio repellendus deserunt inventore, ratione temporibus voluptatem ullam repellat. Id, libero animi? Perspiciatis, nulla numquam. Aspernatur est alias esse iusto doloribus! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, libero natus quae minima quidem veritatis impedit ullam nobis fugit reprehenderit. Corporis, ipsum? Pariatur debitis id repellat nisi expedita beatae qui."}
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
              <Card>
                <Card.Body>
                  <Card.Title>Chapters</Card.Title>
                  <Table striped size="sm">
                    <tbody>
                      {chapters.map((chapter) => (
                        <tr onClick={() => setTime(chapter.time)}>
                          <td>{timeFormatter(chapter.time)}</td>
                          <td>{chapter.title}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
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
            <div className="d-grid gap-2">
              {video && (
                <Button
                  onClick={() => setUrl(video.url_primary)}
                  size="sm"
                  className="mt-2"
                  variant="danger"
                >
                  Force Video Load
                </Button>
              )}
            </div>
            <div className="d-grid gap-2">
              <Link to={`/videos/${params.slug}/edit`}>
                <Button size="sm" className="mt-2" variant="outline-danger">
                  Edit Video Data
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export function VideoChapters({ chapters }) {
  return <div></div>;
}
