import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";
import movieListReducer from "./reducers/movieListReducer";
import { usersReducer } from "./reducers/usersReducer";

const reducer = combineReducers({
  movies: movieListReducer,
  users: usersReducer,
});

const initialState = {
  movies: { name: "TERMINATOR 2" },
  users: [],
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

// import {createStore, combineReducers, applyMiddleware } from 'redux';

// const store = createStore(reducer, initialState, applyMiddleware(thunk))

const myCustomLogger = (store) => (next) => (action) => {
  console.log("Logged action", action);
  next();
};
