import React from "react";
import { useParams } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import { getVideo } from "../VideoData";

export default function VideoPage() {
  let params = useParams();
  let video = getVideo(params.videoId);
  return (
    <>
      <h1>Video Page</h1>
      <VideoPlayer urlObject={video} />
      <h2>{video.title}</h2>
    </>
  );
}
