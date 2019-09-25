import React from "react";
import { connect } from "react-redux";

const Note = props => {
  console.log(props.note);
  const { note } = props;
  return (
    <div>
      note
      <p>{note.title}</p>
      <p> {note.body}</p>
    </div>
  );
};

const mapStateToProps = ({ notes }, { match }) => {
  const { id } = match.params;

  const note = notes.find(note => id == note._id);
  return {
    note: note
  };
};

export default connect(mapStateToProps)(Note);
