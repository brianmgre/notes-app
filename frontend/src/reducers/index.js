import { combineReducers } from "redux";

import notes from "./note";
import loader from "./loader";
import modal from "./modal";

export default combineReducers({
  notes,
  loader,
  modal
});
