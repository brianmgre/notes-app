import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddNote, handleEditNote } from "../actions/notes";

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

  handleCancel = e => {
    e.preventDefault();
    return this.props.toggle
      ? this.props.toggle()
      : this.props.history.push("/");
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
      if (title !== "" && body !== "") {
        this.props.history.push("/");
        this.props.dispatch(handleAddNote(this.state));
      }
    }
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { note } = this.props;
    console.log("state", this.state);
    return (
      <div>
        <h1>Add Something Inspiring!</h1>
        <form onSubmit={this.saveNote}>
          <input
            placeholder="title"
            name="title"
            type="text"
            required
            value={this.state.title}
            onChange={this.changeHandler}
          />
          <input
            placeholder="Note"
            name="body"
            type="text"
            required
            value={this.state.body}
            onChange={this.changeHandler}
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

export default connect(mapStateToProps)(NoteForm);
