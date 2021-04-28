import { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineFileAdd } from "react-icons/ai";
import "./App.css";
import AddUser from "./components/AddUser/AddUser";
import TableUsers from "./components/TableUsers/TableUsers";
import UpdateUser from "./components/UpdateUser/UpdateUser";

//json-server --watch db.json   // запускаем в терминале в папке с файлом db.json

function App() {
  const [users, setUsers] = useState([]);
  useEffect(async () => {
    const dataUsers = await axios.get("http://localhost:3000/users");
    console.log(dataUsers.data);
    setUsers(dataUsers.data);
  }, []);

  const [isAdding, setIsAdding] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({});

  // const addUser = async (user) => {
  //   const newUser = { ...user, id: Date.now() };

  //   try {
  //     const response = await axios.post("http://localhost:3000/users", newUser);
  //     console.log(response.data);
  //     setUsers([...users, response.data]);
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // };

  // const updateUser = async (updatedUser) => {
  //   try {
  //     const response = await axios.put(
  //       `http://localhost:3000/users/${updatedUser.id}`,
  //       updatedUser
  //     );
  //     const updatedUserFromBackEnd = response.data;
  //     //console.log(updatedUserFromBackEnd);
  //     setUsers(
  //       users.map((user) =>
  //         user.id === updatedUserFromBackEnd.id ? updatedUserFromBackEnd : user
  //       )
  //     );
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // const openUpdateForm = (user) => {
  //   setUpdatedUser(user);
  //   setIsUpdating(true);
  //   console.log(`The updated user is ${user.firstName}`);
  // };

  // const deleteUser = async (id) => {
  //   try {
  //     const response = await axios.delete(`http://localhost:3000/users/${id}`);
  //     setUsers([...users].filter((user) => user.id !== id));
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // };

  return (
    <div className="App container">
      <AiOutlineFileAdd
        style={{
          transform: "scale(2)",
          cursor: "pointer",
          marginBottom: "20px",
        }}
        onClick={() => setIsAdding(!isAdding)}
      />
      {isAdding && <AddUser addUser={addUser} />}
      {isUpdating && (
        <UpdateUser
          user={updatedUser}
          updateUser={updateUser}
          closeUpdateForm={() => setIsUpdating(false)}
        />
      )}

      <TableUsers
        users={users}
        deleteUser={deleteUser}
        openUpdateForm={openUpdateForm}
        updateUser={updateUser}
      />
    </div>
  );
}

export default App;
