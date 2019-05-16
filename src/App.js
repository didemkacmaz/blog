import React, { Component } from "react";
import { Route } from "react-router-dom";
import Footer from "./components/Footer";
class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={Footer} />
      </div>
    );
  }
}

export default App;
