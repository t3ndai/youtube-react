import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { getShortNumberString } from "services/number/number-format";

import "./VideoPreview.scss";

TimeAgo.locale(en);
const timeAgo = new TimeAgo("en-US");

export default class VideoPreview extends Component {
  static getFormattedViewAndTime(video) {
    const publicationDate = new Date(video.snippet.publishedAt);
    const viewCount = video.statistics ? video.statistics.viewCount : null;
    if (viewCount) {
      const viewCountShort = getShortNumberString(video.statistics.viewCount);
      return `${viewCountShort} views • ${timeAgo.format(publicationDate)}`;
    }
    return "";
  }

  render() {
    const { video } = this.props;
    if (!video) {
      return <div />;
    }

    const horizontal = this.props.horizontal ? "horizontal" : null;

    const viewAndTimeString = VideoPreview.getFormattedViewAndTime(video);

    return (
      <div className={["video-preview", horizontal].join(" ")}>
        <div className="image-container">
          <Image src={video.snippet.thumbnails.medium.url} />
          <div className="time-label">
            <span>{video.contentDetails.duration}</span>
          </div>
        </div>

        <div className="video-info">
          <div className="semi-bold show-max-two-line">
            {video.snippet.title}
          </div>
          <div className="video-preview-metadata-container">
            <div className="channel-title">{video.snippet.channelTitle}</div>
            <div>
              <span>{viewAndTimeString}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
