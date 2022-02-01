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
  return (
    <>
      <VideoPlayer video={video} />
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
            <div className="d-grid gap-2">
              {video.backup && (
                <Button size="sm" className="mb-2" variant="outline-primary">
                  Switch to Backup Video
                </Button>
              )}
            </div>
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
          </Col>
        </Row>
      </Container>
    </>
  );
}

export function VideoChapters({ chapters }) {
  return <div></div>;
}
