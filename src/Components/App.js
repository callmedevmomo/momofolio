import React, { Component } from "react";
import GlobalStyles from "Components/GlobalStyles";
import Router from "Components/Router";
import MediaScreen from "Components/MediaScreen";

class App extends Component {
  render() {
    return (
      <>
        <Router />
        <GlobalStyles />
        <MediaScreen />
      </>
    );
  }
}

export default App;
