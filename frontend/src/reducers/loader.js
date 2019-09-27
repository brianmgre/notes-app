import { DATA_REQUEST } from "../actions/notes";
import { CLOSE_LOADER, OPEN_LOADER } from "../actions/loader";

export default function loader(state = true, action) {
  switch (action.type) {
    case DATA_REQUEST:
      return false;

    case OPEN_LOADER:
      return true;

    case CLOSE_LOADER:
      return false;

    default:
      return state;
  }
}
