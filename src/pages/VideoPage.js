import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Stack,
  Table,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import { getVideoBySlug } from "../VideoData";

export default function VideoPage() {
  let params = useParams();
  let video = getVideoBySlug(params.slug);
  const [url, setUrl] = useState(video.primary);
  const [version, setVersion] = useState("Primary");
  const [time, setTime] = useState(video.startTime);

  function toggleBackup() {
    if (version === "Primary") {
      setUrl(video.backup);
      setVersion("Backup");
    } else {
      setUrl(video.primary);
      setVersion("Primary");
    }
    // jumpToTime(video.startTime);
  }

  return (
    <>
      <VideoPlayer url={url} time={time} />
      <h1>{video.title}</h1>
      <hr />
      <Container>
        <Row>
          <Col xxl={9} xl={8} lg={8} md={7}>
            <h2>Description</h2>
            <p styles={{ whiteSpace: "pre-wrap" }}>
              {video.description
                ? video.description
                : "This video has no description, so here is some LOREM TEXT. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit optio repellendus deserunt inventore, ratione temporibus voluptatem ullam repellat. Id, libero animi? Perspiciatis, nulla numquam. Aspernatur est alias esse iusto doloribus! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, libero natus quae minima quidem veritatis impedit ullam nobis fugit reprehenderit. Corporis, ipsum? Pariatur debitis id repellat nisi expedita beatae qui."}
            </p>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Chapters</Card.Title>
                <Table striped size="sm">
                  <tbody>
                    <tr>
                      <td>0:34:00</td>
                      <td>Chaos</td>
                    </tr>
                    <tr>
                      <td>0:35:00</td>
                      <td>Not Chaos</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
            <div className="d-grid gap-2">
              {video.backup && (
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

export function VideoChapters({ chapters }) {
  return <div></div>;
}
