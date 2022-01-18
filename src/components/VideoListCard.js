import { Card, Stack } from "react-bootstrap";

export default function VideoListCard({ handleOpenVideo }) {
  return (
    <Card className="">
      <Card.Body>
        <Card.Title>
          <div>List of Videos</div>
        </Card.Title>
        <Stack direction="vertical" gap="2">
          <div
            style={{ cursor: "pointer" }}
            onClick={() =>
              handleOpenVideo({
                primary: "https://vimeo.com/566374660#t=3m43s",
                backup: "https://www.youtube.com/watch?v=_wL7Y_9iLyI?t=223",
              })
            }
          >
            Clifflix: Illuminations Reflections of Earth 2021
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() =>
              handleOpenVideo({
                primary: "https://youtu.be/Qzvg9KuvRiw?t=109",
              })
            }
          >
            Clifflix: Happily Ever After in 8k
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() =>
              handleOpenVideo({
                primary: "https://vimeo.com/417445463#t=2m03s",
                backup: "https://youtu.be/g4GmKYrzM0w?t=123",
              })
            }
          >
            Clifflix: World of Color 2020
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() =>
              handleOpenVideo({
                primary: "https://youtu.be/AGYne2pBWTY?t=784",
              })
            }
          >
            Reflections of Earth with Peace on Earth Finale 2016
          </div>
          <div>Video 3</div>
          <div>Video 4</div>
          <div>Video 5</div>
        </Stack>
      </Card.Body>
    </Card>
  );
}
