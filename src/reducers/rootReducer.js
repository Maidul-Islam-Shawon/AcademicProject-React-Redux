import { combineReducers } from "redux";
import studentReducer from "./studentReducer";
import testReducer from "./testReducer";

const rootReducer = combineReducers({
  students: studentReducer,
  tests: testReducer,
});

export default rootReducer;
