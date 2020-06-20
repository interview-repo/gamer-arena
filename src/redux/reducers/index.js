import { combineReducers } from "redux";

import * as home from "./home";
import * as search from "./search";

const allReducers = Object.assign(home, search);
export default combineReducers(allReducers);
