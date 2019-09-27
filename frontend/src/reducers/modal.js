// import { TOGGLE_MODAL } from "../actions/modal";

import { CLOSE_MODAL, OPEN_MODAL } from "../actions/modal";

export default function modal(state = false, action) {
  console.log("action", action);
  switch (action.type) {
    case OPEN_MODAL:
      console.log(action);
      return !state;

    default:
      return state;
  }
}
