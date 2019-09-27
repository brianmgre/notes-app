import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddNote, handleEditNote } from "../actions/notes";
import { openModal } from "../actions/modal";
import TextField from "@material-ui/core/TextField";
import withStyles from "@material-ui/core/styles/withStyles";
import { Paper } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

export const styles = {
  formContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    padding: "50px"
  },

  form: {
    display: "flex",
    flexDirection: "column",
    width: "80%",
    padding: 50
  },

  formInputs: {
    padding: "10px",
    whiteSpace: "pre-line"
  },

  editIcon: {
    fontSize: 20,
    "&:hover": {
      cursor: "pointer",
      color: "#4cb649"
    },
    textAlign: "end"
  },

  formHeader: {
    color: "#4cb649"
  },

  backIcon: {
    fontSize: 29,
    "&:hover": {
      cursor: "pointer",
      color: "#4cb649"
    },
    width: "100%",
    textAlign: "start"
  },

  resize: {
    fontSize: "1.8rem",
    lineHeight: 1.5
  },
  saveCloseIcon: {
    fontSize: 29,
    color: "#4cb649",
    "&:hover": {
      cursor: "pointer",
      color: "#4cb649"
    },
    width: "100%",
    textAlign: "center"
  },
  iconContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    paddingTop: 20
  },
  saveIcon: {
    fontSize: 20,
    color: "#4cb649",
    backgroundColor: "white",
    width: "152px",
    borderRadius: "5px",
    border: "1px solid #4cb649",
    padding: 7,
    "&:hover": {
      cursor: "pointer",
      color: "white",
      backgroundColor: "#4cb649",
      border: "1px solid white"
    }
  },

  closeIcon: {
    fontSize: 20,
    color: "#fb8400",
    backgroundColor: "white",
    borderRadius: "5px",
    width: "152px",
    border: "1px solid #fb8400",
    padding: 7,
    "&:hover": {
      cursor: "pointer",
      color: "white",
      backgroundColor: "#fb8400",
      border: "1px solid white"
    }
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
      <Paper className={classes.formContainer}>
        <Icon className={classes.backIcon} onClick={this.handleCancel}>
          arrow_back
        </Icon>
        <h1 className={classes.formHeader}>Add Something Inspiring!</h1>
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
            InputProps={{
              classes: {
                input: classes.resize
              }
            }}
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
            InputProps={{
              classes: {
                input: classes.resize
              }
            }}
          />

          <div className={classes.iconContainer}>
            <button type="submit" className={classes.saveIcon}>
              Save
            </button>
            <button onClick={this.handleCancel} className={classes.closeIcon}>
              Cancel
            </button>
          </div>
        </form>
      </Paper>
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
