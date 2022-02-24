import React from "react";
import VideoList from "../components/VideoList";

export default function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <VideoList type="all" />
    </div>
  );
}
