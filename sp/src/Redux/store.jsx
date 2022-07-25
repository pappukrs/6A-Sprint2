import { createStore, combineReducer, applyMiddleware, compose } from "redux";
import Loginreducer from "./loginreducer";
import { thunk } from "redux-thunk";
const rootReducer = combineReducer({
  token: Loginreducer,
});

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk)),

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
