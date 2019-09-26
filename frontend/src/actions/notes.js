import axios from "axios";

export const ADD_NOTE = "ADD_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const DATA_REQUEST = "DATA_REQUEST";

const url = process.env.REACT_APP_API;

function addNote(note) {
  return {
    type: ADD_NOTE,
    note
  };
}

function editNote(note) {
  return {
    type: EDIT_NOTE,
    note
  };
}

function deleteNote(id) {
  return {
    type: DELETE_NOTE,
    id
  };
}

function dataRequest(notes) {
  return {
    type: DATA_REQUEST,
    notes
  };
}

export function handleAddNote(note) {
  return dispatch => {
    return axios
      .post(`${url}/api/notes/add`, note)
      .then(res => {
        dispatch(addNote(res.data.savedNote));
      })
      .catch(err => {
        alert("error");
      });
  };
}

export function handleDeleteNote(note) {
  return dispatch => {
    dispatch(deleteNote(note.id));
    return axios.delete().catch(() => {
      dispatch(addNote(note));
      alert("error");
    });
  };
}

export function handleData() {
  return dispatch => {
    return axios.get(`${url}/api/notes`).then(res => {
      dispatch(dataRequest(res.data.allNotes));
    });
  };
}
