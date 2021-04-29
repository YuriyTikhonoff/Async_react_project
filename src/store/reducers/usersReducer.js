import {
  FETCH_USERS_REQUST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
} from "../constants/userConstants";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUST:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCESS:
      return { ...state, users: action.payload, loading: false };
    case FETCH_USERS_FAIL:
      return { ...state, error: action.payload, loading: false };
    default:
      state;
  }
};
