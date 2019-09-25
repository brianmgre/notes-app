import { DATA_REQUEST } from "../actions/notes";

export default function loader(state = true, actions) {
  switch (actions.type) {
    case DATA_REQUEST:
      return false;
    default:
      return state;
  }
}
