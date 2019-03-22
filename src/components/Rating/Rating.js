import React from "react";
import { Icon, Progress } from "semantic-ui-react";

import "./Rating.scss";

export function Rating(props) {
  let progress = null;
  if (props.likeCount && props.dislikeCount) {
    const percent =
      100 * (props.likeCount / (props.likeCount + props.dislikeCount));
    progress = <Progress className="progress" percent={percent} size="tiny" />;
  }
  return (
    <div className="rating">
      <div className="thumps-up">
        <Icon name="thumbs outline up" />
        <span>{props.likeCount}</span>
      </div>
      <div className="thumps-down">
        <Icon name="thumbs outline down" />
        <span>{props.dislikeCount}</span>
      </div>
      {progress}
    </div>
  );
}
