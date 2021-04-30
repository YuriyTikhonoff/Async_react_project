import {
  FETCH_USERS_REQUST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
  DELETE_USER_REQUST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
} from "../constants/userConstants";
import axios from "axios";

export const fetchUsers = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_USERS_REQUST });
    const response = await axios.get("http://localhost:3000/users");
    const fetchedUsers = response.data;
    dispatch({ type: FETCH_USERS_SUCCESS, payload: fetchedUsers });
  } catch (error) {
    dispatch({ type: FETCH_USERS_FAIL, payload: error.message });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_USER_REQUST });
    await axios.delete(`http://localhost:3000/users/${id}`);
    dispatch({ type: DELETE_USER_SUCCESS, payload: id });
  } catch (error) {
    dispatch({ type: DELETE_USER_FAIL, payload: error.message });
  }
};

//export const fetchUsers = () => alert("Action creator works");
