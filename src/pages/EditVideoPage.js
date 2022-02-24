import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Stack,
  Table,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import { fetchVideoBySlug } from "../supabaseClient";
import { timeFormatter } from "../utils";
import "./VideoPage.css";

export default function EditVideoPage() {
  let params = useParams();
  const [video, setVideo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chapters, setChapters] = useState([]);

  async function getVideo(slug) {
    setLoading(true);
    let videoData = await fetchVideoBySlug(slug);
    setVideo(videoData);
    setChapters(videoData.chapters);
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    getVideo(params.slug);
    setLoading(false);
  }, []);

  useEffect(() => {
    document.title = "Edit Page | The Home Video App";
    if (video) {
      document.title = `Edit ${video.title} | The Home Video App`;
    }
  });

  if (loading) return "Loading...";

  return (
    <>
      {/* <VideoPlayer url={url} time={time} /> */}
      <h1>EDIT {video.title}</h1>
      {/* <hr /> */}
      <Form>
        <Form.Group className="mb-3" controlId="videoEditForm.Title">
          <Form.Label>Video Title</Form.Label>
          <Form.Control type="text" value={video.title} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="videoEditForm.Description">
          <Form.Label>Video Description</Form.Label>
          <Form.Control as="textarea" rows={9} value={video.description} />
        </Form.Group>
      </Form>
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
        </Row>
      </Container>
    </>
  );
}

export function VideoChapters({ chapters }) {
  return <div></div>;
}
