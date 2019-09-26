import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const AllNotes = props => {
  const { notes } = props;

  return (
    <div>
      <Link to="/new-note">
        <p>add note</p>
      </Link>
      all notes
      {notes.map(note => (
        <Link to={`notes/${note._id}`} key={note._id}>
          <p>{note.title}</p>
          <p>{note.body}</p>
        </Link>
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
