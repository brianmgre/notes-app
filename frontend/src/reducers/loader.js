import { DATA_REQUEST } from "../actions/notes";

export default function loader(state = true, action) {
  switch (action.type) {
    case DATA_REQUEST:
      console.log("state", state);
      return false;
    default:
      return state;
  }
}
