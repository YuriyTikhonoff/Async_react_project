import {createStore, combineReducers, applyMiddleware } from 'redux';
import movielistReducer from './reducers/movielistReducer';

const reducer = combineReducers({movies: movielistReducer});

const initialState = {
movies: {name: "TERMINATOR 2"}
};

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;



import {createStore, combineReducers, applyMiddleware } from 'redux';

const store = createStore(reducer, initialState, applyMiddleware(myCustomLogger) 

const myCustomLogger  = (store) => (next) => (action) => {
    console.log("Logged action", action);
    next();
}