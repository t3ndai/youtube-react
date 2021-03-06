import React, { Component } from "react";
import { SideBar } from "containers/SideBar/SideBar";
import HomeContent from "./HomeContent/HomeContent";
import { getYoutubeLibraryLoaded } from "store/reducers/api";
import * as videoActions from "store/actions/video";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import "./Home.scss";

class Home extends Component {
  componentDidMount() {
    if (this.props.youtubeLibraryLoaded) {
      this.props.fetchMostPopularVideos();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.youtubeLibraryLoaded !== prevProps.youtubeLibraryLoaded) {
      this.props.fetchMostPopularVideos();
    }
  }

  render() {
    return (
      <React.Fragment>
        <SideBar />
        <HomeContent />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    youtubeLibraryLoaded: getYoutubeLibraryLoaded(state)
  };
}

function mapDispatchToProps(dispatch) {
  const fetchMostPopularVideos = videoActions.mostPopular.request;
  return bindActionCreators({ fetchMostPopularVideos }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
