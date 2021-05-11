import {
  FETCH_USERS_REQUST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
  DELETE_USER_REQUST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  ADD_USER_REQUST,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
  UPDATE_USER_REQUST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
} from "../constants/userConstants";

import userAPI from "../../API/usersApi/usersAPI";
import axios from "axios";
import { apiUsersURL } from "../../API/api_config";

export const fetchUsers = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_USERS_REQUST });
    const fetchedUsers = await userAPI.fetchAllUsers();
    dispatch({ type: FETCH_USERS_SUCCESS, payload: fetchedUsers });
  } catch (error) {
    dispatch({ type: FETCH_USERS_FAIL, payload: error.message });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_USER_REQUST });
    await axios.delete(`${apiUsersURL}${id}`);
    dispatch({ type: DELETE_USER_SUCCESS, payload: id });
  } catch (error) {
    dispatch({ type: DELETE_USER_FAIL, payload: error.message });
  }
};

export const addUser = (newUser) => async (dispatch) => {
  try {
    dispatch({ type: ADD_USER_REQUST });
    const response = await axios.post(apiUsersURL, newUser);
    const newUserResponse = response.data;
    dispatch({ type: ADD_USER_SUCCESS, payload: newUserResponse });
  } catch (error) {
    dispatch({ type: ADD_USER_FAIL, payload: error.message });
  }
};

export const updateUser = (updatedUser) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_USER_REQUST });
    const response = await axios.put(
      `${apiUsersURL}${updatedUser.id}`,
      updatedUser
    );
    const updatedUserResponse = response.data;
    dispatch({ type: UPDATE_USER_SUCCESS, payload: updatedUserResponse });
  } catch (error) {
    dispatch({ type: UPDATE_USER_FAIL, payload: error.message });
  }
};

//export const fetchUsers = () => alert("Action creator works");
