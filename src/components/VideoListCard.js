import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useEffect, useState } from "react";
import { Card, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fetchVideos, fetchVideosByType } from "../supabaseClient";
// import { getVideos, getVideosByType } from "../VideoData";

export default function VideoListCard({ type }) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getVideos(type) {
    let videoData = await fetchVideos();
    setVideos(videoData);
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    getVideos();
    setLoading(false);
  }, []);

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
              <VideoListCardRow video={video} />
            ))}
          </ul>
        </Stack>
      </Card.Body>
    </Card>
  );
}

export function VideoListCardRow({ video }) {
  dayjs.extend(relativeTime);
  return (
    <li key={video.id}>
      <Link to={`/videos/${video.slug}`}>{video.title}</Link> (
      <Link to={`/videos/${video.slug}/edit`}>Edit</Link>){" "}
      <span className="text-muted">{dayjs(video.date_post).fromNow()}</span>
    </li>
  );
}
