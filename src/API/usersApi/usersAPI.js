import * as axios from "axios";

const apiUsersURL = "http://localhost:3005/users/";

const usersInstance = axios.create({
  baseURL: apiUsersURL,
  responseType: "json",
});

const usersAPI = {
  async fetchAllUsers() {
    const response = await usersInstance.get();
    return response.data;
  },
};

export default usersAPI;
