import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

const initialState = {};

const reduxStore = createStore(
  rootReducer,
  initialState,
  composeWithDevTools()
);

export default reduxStore;
