import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddNote } from "../actions/notes";

class AddNote extends Component {
  state = {
    title: "",
    body: ""
  };

  handleCancel = () => {
    this.props.history.push("/");
  };

  saveNote = e => {
    e.preventDefault();
    this.props.history.push("/");
    this.props.dispatch(handleAddNote(this.state));
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>Add Something Inspiring!</h1>
        <form onSubmit={this.saveNote}>
          <input
            placeholder="title"
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.changeHandler}
          />
          <input
            placeholder="Note"
            name="body"
            type="text"
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

export default connect()(AddNote);
