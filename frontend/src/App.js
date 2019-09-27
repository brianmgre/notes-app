import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleData } from "./actions/notes";
import AllNotes from "./components/allNotes";
import Note from "./components/note";
import NoteForm from "./components/noteForm";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  root: {
    maxWidth: "1024px",
    margin: "auto",
    marginTop: "40px"
  },
  routeContainer: {
    width: "100%",
    margin: "0px 10px"
  }
};

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleData());
  }

  render() {
    const { loading, classes } = this.props;
    return (
      <Router>
        <div className={classes.root}>
          {!loading ? (
            "nope"
          ) : (
            <div className={classes.routeContainer}>
              <Route exact path="/" component={AllNotes} />
              <Route path="/notes/:id" component={Note} />
              <Route path="/new-note" component={NoteForm} />
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
export default connect(mapStateToProps)(withStyles(styles)(App));
