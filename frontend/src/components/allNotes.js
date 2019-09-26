import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { handleDeleteNote } from "../actions/notes";

const AllNotes = props => {
  const { notes } = props;

  const clickHandler = note => {
    console.log("click", note);
    props.dispatch(handleDeleteNote(note));
  };
  return (
    <div>
      <Link to="/new-note">
        <p>add note</p>
      </Link>
      all notes
      {notes.map(note => (
        <React.Fragment key={note._id}>
          <Link to={`notes/${note._id}`}>
            <p>{note.title}</p>
            <p>{note.body}</p>
          </Link>
          <button onClick={() => clickHandler(note)}>delete</button>
        </React.Fragment>
      ))}
    </div>
  );
};

const mapStateToProps = ({ notes }) => {
  return {
    notes: notes
  };
};

export default connect(mapStateToProps)(AllNotes);
