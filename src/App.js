import React, { Component } from "react";
import Home from "./containers/Home/Home";
import "./containers/Home/Home.scss";
import { AppLayout } from "components/AppLayout/AppLayout";
import { Route, Switch } from "react-router-dom";
import { Watch } from "containers/Watch/Watch";
import { connect } from "react-redux";
import { youtubeLibraryLoaded } from "store/actions/api";
import { bindActionCreators } from "redux";

const API_KEY = "AIzaSyC8PDBdSYx7CFRht9ZHL8vjtmjO1agLXTA";

class App extends Component {
  componentDidMount() {
    this.loadYoutubeApi();
  }

  loadYoutubeApi() {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";

    script.onload = () => {
      window.gapi.load("client", () => {
        window.gapi.client.setApiKey(API_KEY);
        window.gapi.client.load("youtube", "v3", () => {
          this.props.youtubeLibraryLoaded();
        });
      });
    };

    document.body.appendChild(script);
  }

  render() {
    return (
      <AppLayout>
        <Switch>
          <Route path="/watch" component={Watch} />
          <Route path="/" component={Home} />
        </Switch>
      </AppLayout>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      youtubeLibraryLoaded
    },
    dispatch
  );
}

export default connect(
  null,
  mapDispatchToProps
)(App);
