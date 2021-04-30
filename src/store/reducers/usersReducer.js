import {
  FETCH_USERS_REQUST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
  DELETE_USER_REQUST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
} from "../constants/userConstants";

export const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUST:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCESS:
      return { ...state, users: action.payload, loading: false };
    case FETCH_USERS_FAIL:
      return { ...state, error: action.payload, loading: false };
    //Section for deleting a user
    case DELETE_USER_REQUST:
      return { ...state, loading: true };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
        loading: false,
      };
    case DELETE_USER_FAIL:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};
