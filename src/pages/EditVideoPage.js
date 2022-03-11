import { useEffect, useState } from "react";
import { Col, Container, Form, Row, Stack } from "react-bootstrap";
import { useParams } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import useVideo from "../hooks/useVideo";
import "./VideoPage.css";

export default function EditVideoPage() {
  let params = useParams();
  const { status, data: video, error, isFetching } = useVideo(params.slug);

  useEffect(() => {
    document.title = "Edit Page | The Home Video App";
    if (video) {
      document.title = `Edit ${video.title} | The Home Video App`;
    }
  }, [video]);

  if (status === "loading") return "Loading...";
  if (status === "error") return `Error: ${error.message}`;

  return (
    <>
      <h1>EDIT {video.title}</h1>
      <div style={{ maxWidth: "500px" }}>
        <VideoPlayer
          url={video.url_primary}
          time={video.start_time}
          autoplay={false}
        />
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="videoEditForm.Title">
          <Form.Label>Video Title</Form.Label>
          <Form.Control type="text" value={video.title} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="videoEditForm.Description">
          <Form.Label>Video Description</Form.Label>
          <Form.Control as="textarea" rows={9} value={video.description} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="videoEditForm.UrlPrimary">
          <Form.Label>Primary URL</Form.Label>
          <Form.Control type="text" value={video.url_primary} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="videoEditForm.UrlBackup">
          <Form.Label>Backup URL</Form.Label>
          <Form.Control type="text" value={video.url_backup} />
        </Form.Group>
        <div className="d-flex space-between">
          <Form.Group className="mb-3" controlId="videoEditForm.StartTime">
            <Form.Label>Start Time</Form.Label>
            <Form.Control type="number" value={video.url_backup} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="videoEditForm.StartTime">
            <Form.Label>Start Time</Form.Label>
            <Form.Control type="number" value={video.url_backup} />
          </Form.Group>
        </div>
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
                  : "This video has no description."}
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
