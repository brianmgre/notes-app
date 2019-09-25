import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import { handleData } from "./actions/notes";
import AllNotes from "./components/allNotes";
import Note from "./components/note";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleData());
  }

  render() {
    console.log("app props", this.props);
    const { loading } = this.props;
    return (
      <Router>
        <div className="App">
          {!loading ? (
            "nope"
          ) : (
            <div>
              <Route exact path="/" component={AllNotes} />
              <Route path="/notes/:id" component={Note} />
            </div>
          )}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ loader }) => {
  return {
    loading: !loader
  };
};
export default connect(mapStateToProps)(App);
