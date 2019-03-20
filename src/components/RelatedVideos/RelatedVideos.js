import React from "react";
import VideoPreview from "components/VideoPreview/VideoPreview";
import "./RelatedVideos.scss";
import { NextUpVideo } from "./NextUpVideo/NextUpVideo";

export function RelatedVideos(props) {
  return (
    <div className="related-videos">
      <NextUpVideo />
      <VideoPreview horizontal />
      <VideoPreview horizontal />
      <VideoPreview horizontal />
    </div>
  );
}
