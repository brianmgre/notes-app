import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddNote } from "../actions/notes";

class AddNote extends Component {
  state = {
    title: "",
    body: ""
  };

  render() {
    return (
      <div>
        heyo form
        <form>
          <input placeholder="title" name="title" type="text" />
          <input placeholder="Note" name="title" type="text" />
          <button>Save</button>
          <button>Cancel</button>
        </form>
      </div>
    );
  }
}

export default connect()(AddNote);
