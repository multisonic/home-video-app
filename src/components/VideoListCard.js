import { useEffect, useState } from "react";
import { Card, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useVideoStore } from "../appStore";
import { fetchVideos, fetchVideosByType } from "../supabaseClient";

export default function VideoListCard({ type }) {
  // const [videos, setVideos] = useState([]);
  const videos = useVideoStore((state) => state.videos);
  const [loading, setLoading] = useState(true);
  console.log("VideoListCard", videos);
  // async function getVideos(type) {
  //   let videoData = await fetchVideos();
  //   setVideos(videoData);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   setLoading(true);
  //   getVideos();
  //   setLoading(false);
  // }, []);

  if (loading) return "Loading...";
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
