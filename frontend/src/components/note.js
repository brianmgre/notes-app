import React, { Component } from "react";
import { connect } from "react-redux";
import NoteForm from "./noteForm";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
import { styles } from "./noteForm";
import Loader from "../components/loader";

class Note extends Component {
  state = {
    edit: false
  };

  toggleEdit = () => {
    const { edit } = this.state;
    this.setState({
      edit: !edit
    });
  };

  handleCancel = () => {
    this.props.history.push("/");
  };

  render() {
    const { edit } = this.state;
    const { note, classes, loader } = this.props;

    if (loader) {
      return <Loader />;
    } else {
      if (edit) {
        return (
          <div>
            <NoteForm toggle={this.toggleEdit} />
          </div>
        );
      } else {
        return (
          <Paper className={classes.formContainer}>
            <Icon className={classes.backIcon} onClick={this.handleCancel}>
              arrow_back
            </Icon>
            <h1 className={classes.formHeader}>Add Something Inspiring!</h1>
            <div className={classes.form}>
              <div onClick={this.toggleEdit} className={classes.editIcon}>
                <Icon className={classes.editIcon}>edit</Icon>
                <p>edit</p>
              </div>
              <h2 className={classes.formInputs}>{note.title}</h2>
              <p className={classes.formInputs}> {note.body}</p>
            </div>
          </Paper>
        );
      }
    }
  }
}

const mapStateToProps = ({ notes, loader }, { match }) => {
  const { id } = match.params;

  const note = notes.find(note => id === note._id);
  return {
    note: note,
    loader: loader
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Note));
