// import { createStore, combineReducers, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";

// import thunk from "redux-thunk";
// import movielistReducer from "./reducers/movielistReducer";
// import usersReducer from "./reducers/usersReducer";

// const reducer = combineReducers({
//   movies: movielistReducer,
//   users: usersReducer,
// });

// const initialState = {
//   movies: { name: "TERMINATOR 2" },
// };

// const store = createStore(
//   reducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// export default store;

// // import {createStore, combineReducers, applyMiddleware } from 'redux';

// // const store = createStore(reducer, initialState, applyMiddleware(thunk))

// const myCustomLogger = (store) => (next) => (action) => {
//   console.log("Logged action", action);
//   next();
// };
