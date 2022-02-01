import { Button, Card, Stack, Table } from "react-bootstrap";
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
      <Stack direction="horizontal" gap="5">
        <div>
          <h2>Description</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit optio repellendus deserunt inventore, ratione
            temporibus voluptatem ullam repellat. Id, libero animi?
            Perspiciatis, nulla numquam. Aspernatur est alias esse iusto
            doloribus! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Possimus, libero natus quae minima quidem veritatis impedit ullam
            nobis fugit reprehenderit. Corporis, ipsum? Pariatur debitis id
            repellat nisi expedita beatae qui.
          </p>
        </div>
      </Stack>
    </>
  );
}
