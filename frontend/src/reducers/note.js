import {
  ADD_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  DATA_REQUEST
} from "../actions/notes";

export default function notes(state = [], action) {
  switch (action.type) {
    case ADD_NOTE:
      return state.concat([action.note]);

    case EDIT_NOTE:
      return state.map(note => {
        const { _id, title, body } = action.note;
        if (note._id === _id) {
          return Object.assign({}, note, {
            title: title,
            body: body
          });
        } else {
          return note;
        }
      });

    case DELETE_NOTE:
      return state.filter(note => note._id !== action.id);

    case DATA_REQUEST:
      return [...action.notes];

    default:
      return state;
  }
}
