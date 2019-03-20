import React, { Component } from "react";
import "./Home.scss";
import { SideBar } from "../SideBar/SideBar";
import { VideoGrid } from "../../components/VideoGrid/VideoGrid";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <SideBar />
        <div className="home">
          <div className="responsive-video-grid-container">
            <VideoGrid title="Trending" />
            <VideoGrid title="Autos & Vehicles" hideDivider={true} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
