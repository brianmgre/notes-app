import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { handleDeleteNote } from "../actions/notes";
import { openModal } from "../actions/modal";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
import NoteModal from "./noteModal";

const styles = {
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  gridContainer: {
    width: "100%"
  },

  paper: {
    margin: "10px",
    padding: "20px",
    maxHeight: "200px",
    minHeight: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start"
  },

  noteTitle: {
    fontSize: "3rem",
    fontWeight: "bold",
    width: "100%",
    textAlign: "center",
    marginBottom: 30,
    borderBottom: "1px solid black"
  },

  link: {
    textDecoration: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "black"
  },
  notePar: {
    width: "100%"
  },
  deleteIcon: {
    fontSize: 20,
    "&:hover": {
      cursor: "pointer",
      color: "#fb8400"
    }
  },
  addIcon: {
    fontSize: 30,
    color: "white"
  },

  addNoteContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer"
    },
    margin: "20px 0px",
    color: "white"
  }
};

const AllNotes = props => {
  const { notes, classes, modal } = props;
  console.log(modal);

  const clickHandler = note => {
    props.dispatch(handleDeleteNote(note));
  };

  const modalOpen = () => {
    props.dispatch(openModal());
  };

  return (
    <div className={classes.root}>
      <div onClick={modalOpen} className={classes.addNoteContainer}>
        <Icon className={classes.addIcon}>add_circle_outline</Icon>
        <h2>Add Note</h2>
      </div>
      <Grid container spacing={1} className={classes.gridContainer}>
        {notes.map(note => (
          <Grid item key={note._id} xs={12} md={6} sm={6} zeroMinWidth>
            <Paper className={classes.paper}>
              <Icon
                // className="material-icons"
                className={classes.deleteIcon}
                onClick={() => clickHandler(note)}
              >
                delete_outline
              </Icon>
              <Link to={`notes/${note._id}`} className={classes.link}>
                <h3 className={classes.noteTitle}>
                  {note.title.length > 20
                    ? note.title.substring(0, 20) + "..."
                    : note.title}
                </h3>
                <h3 className={classes.notePar}>
                  {note.body.length > 38
                    ? note.body.substring(0, 38) + "..."
                    : note.body}
                </h3>
              </Link>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <NoteModal />
    </div>
  );
};

const mapStateToProps = ({ notes, modal }) => {
  console.log("modal", modal);

  return {
    notes: notes,
    modal: modal
  };
};

export default connect(mapStateToProps)(withStyles(styles)(AllNotes));
