import React, { Component } from "react";
import { CircularProgress } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  loader: {
    color: "#fb8400",
    position: "absolute",
    top: "50%",
    left: "48%"
  }
};

class Loader extends Component {
  state = {
    progress: null
  };

  componentDidMount() {
    const tick = () => {
      if (this.state.progress >= 100) {
        this.setState({
          progress: 0
        });
      } else {
        this.setState({
          progress: this.state.progress + 1
        });
      }
    };

    this.timer = window.setInterval(tick, 10);
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }
  render() {
    const { classes } = this.props;

    return (
      <CircularProgress
        className={classes.loader}
        variant="determinate"
        value={this.state.progress}
      />
    );
  }
}

export default withStyles(styles)(Loader);
