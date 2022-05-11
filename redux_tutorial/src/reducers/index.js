import { combineReducers } from "redux";
import counterReducer from "./counter";
import loggedReducer from "./isLogged";

//.js file that combines all reducers
const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
});

export default allReducers;
