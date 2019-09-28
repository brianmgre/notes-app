import { OPEN_MODAL } from "../actions/modal";

export default function modal(state = false, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return !state;

    default:
      return state;
  }
}
