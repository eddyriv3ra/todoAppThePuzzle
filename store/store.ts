import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { todosReducer } from "./reducers";

export const store = createStore(
  combineReducers({
    todos: todosReducer,
  }),
  composeWithDevTools()
);
