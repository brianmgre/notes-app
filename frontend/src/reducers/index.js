import { combineReducers } from "redux";

import notes from "./note";
import loader from "./loader";

export default combineReducers({
  notes,
  loader
});
