import React, { Component } from "react";
import { connect } from "react-redux";
import NoteForm from "./noteForm";

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
    const { note } = this.props;
    if (edit) {
      return (
        <div>
          <NoteForm toggle={this.toggleEdit} />
        </div>
      );
    } else {
      return (
        <div>
          <p onClick={this.toggleEdit}>Edit Note</p>
          <button onClick={this.handleCancel}>back</button>
          note
          <p>{note.title}</p>
          <p> {note.body}</p>
        </div>
      );
    }
  }
}

const mapStateToProps = ({ notes }, { match }) => {
  const { id } = match.params;

  const note = notes.find(note => id === note._id);
  return {
    note: note
  };
};

export default connect(mapStateToProps)(Note);
