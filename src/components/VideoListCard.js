import { useEffect, useState } from "react";
import { Card, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fetchVideos, supabase } from "../supabaseClient";
import { getVideos, getVideosByType } from "../VideoData";

export default function VideoListCard({ handleOpenVideo }) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getVideos() {
    let videoData = await fetchVideos();
    setVideos(videoData);
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    getVideos();
    setLoading(false);
  }, []);

  // const fetchVideos = async () => {
  //   let { data, error } = await supabase.from("videos").select("*");

  //   if (error) console.log("error", error);
  //   else setVideos(data);
  // };
  // let videos = getVideosByType("home-video");
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
                <Link to={`/videos/${video.slug}`}>{video.title}</Link>
              </li>
            ))}
          </ul>
        </Stack>
      </Card.Body>
    </Card>
  );
}
