import {
  FETCH_USERS_REQUST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
} from "../constants/userConstants";
import axios from "axios";

// export const fetchUsers = () => async (dispatch) => {
//   // try {
//   //   dispatch({ type: FETCH_USERS_REQUST });
//   //   const response = await axios.get("http://localhost:3000/users");
//   //   const fetchedUsers = response.data;
//   //   dispatch({ type: FETCH_USERS_SUCCESS, payload: fetchedUsers });
//   // } catch (error) {
//   //   dispatch({ type: FETCH_USERS_FAIL });
//   // }
// };
