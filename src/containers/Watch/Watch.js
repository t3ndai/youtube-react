import React, { Component } from "react";
import "./Watch.scss";
import { RelatedVideos } from "components/RelatedVideos/RelatedVideos";
import { Video } from "components/Video/Video";
import { VideoMetadata } from "components/VideoMetadata/VideoMetadata";
import { VideoInfoBox } from "components/VideoInfoBox/VideoInfoBox";
import { Comments } from "containers/Comments/Comments";

export class Watch extends Component {
  render() {
    return (
      <div className="watch-grid">
        <Video className="video" id="8g2vNqfDNwk" />
        <VideoMetadata className="metadata" viewCount={1000} />
        <VideoInfoBox className="video-info-box" />
        <Comments className="comments" />
        <RelatedVideos />
      </div>
    );
  }
}
