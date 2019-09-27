import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddNote, handleEditNote } from "../actions/notes";
import { openModal } from "../actions/modal";
import TextField from "@material-ui/core/TextField";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  formContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    padding: "49px 20px"
  },

  form: {
    display: "flex",
    flexDirection: "column",
    width: "80%"
  },

  formInputs: {
    padding: "10px"
  }
};

class NoteForm extends Component {
  state = {
    title: "",
    body: ""
  };

  componentDidMount() {
    if (this.props.note !== undefined) {
      const { title, body } = this.props.note;
      this.setState({
        title: title,
        body: body
      });
    }
  }

  modalOpen = () => {
    this.props.dispatch(openModal());
  };

  handleCancel = e => {
    e.preventDefault();
    return this.props.toggle ? this.props.toggle() : this.modalOpen();
  };

  saveNote = e => {
    e.preventDefault();
    const { title, body } = this.state;
    const { note } = this.props;
    if (note !== undefined) {
      const { dispatch, toggle } = this.props;
      const editedNote = {
        _id: note._id,
        title,
        body
      };
      dispatch(handleEditNote(editedNote));
      toggle();
    } else {
      const { dispatch } = this.props;
      if (title !== "" && body !== "") {
        this.modalOpen();
        dispatch(handleAddNote(this.state));
      }
    }
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.formContainer}>
        <h1 className={classes.formInputs}>Add Something Inspiring!</h1>
        <form onSubmit={this.saveNote} className={classes.form}>
          <TextField
            placeholder="title"
            name="title"
            type="text"
            required
            value={this.state.title}
            maxLength="50"
            onChange={this.changeHandler}
            className={classes.formInputs}
          />
          <TextField
            placeholder="Note"
            name="body"
            type="text"
            required
            variant="outlined"
            multiline
            rowsMax="6"
            value={this.state.body}
            onChange={this.changeHandler}
            className={classes.formInputs}
          />
          <button type="submit">Save</button>
          <button onClick={this.handleCancel}>Cancel</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ notes }) => {
  let id = window.location.href.substr(
    window.location.href.lastIndexOf("/") + 1
  );

  if (id !== "new-note") {
    const note = notes.find(note => id === note._id);
    return {
      note: note
    };
  } else {
    return {};
  }
};

export default connect(mapStateToProps)(withStyles(styles)(NoteForm));
