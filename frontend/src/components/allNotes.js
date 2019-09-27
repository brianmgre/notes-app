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
    border: "1px solid red",
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
    marginBottom: 30
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
      color: "red"
    }
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
      <div>
        <Icon id="add" className={classes.add}>
          add_circle_outline
        </Icon>
        <p onClick={modalOpen}>add note</p>
      </div>
      <h1>Leave a Note</h1>
      <Grid container spacing={8} className={classes.gridContainer}>
        {notes.map(note => (
          <Grid item key={note._id} xs={12} md={4} sm={4}>
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
                  {note.title.length > 10
                    ? note.title.substring(0, 10) + "..."
                    : note.title}
                </h3>
                <p className={classes.notePar}>
                  {note.body.length > 50
                    ? note.body.substring(0, 50) + "..."
                    : note.body}
                </p>
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
