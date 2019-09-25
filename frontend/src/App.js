import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { handleData } from "./actions/notes";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleData());
  }

  render() {
    return <div className="App">heyo</div>;
  }
}

export default connect()(App);
