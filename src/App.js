import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./store/actions/userActions";
import axios from "axios";
import { AiOutlineFileAdd } from "react-icons/ai";
import "./App.css";
import AddUser from "./components/AddUser/AddUser";
import TableUsers from "./components/TableUsers/TableUsers";
import UpdateUser from "./components/UpdateUser/UpdateUser";

//json-server --watch db.json   // запускаем в терминале в папке с файлом db.json

function App() {
  // const [users, setUsers] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
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

  const closeAddForm = () => setIsAdding(false);

  const openUpdateForm = (user) => {
    closeAddForm();
    setUpdatedUser(user);
    setIsUpdating(true);
    console.log(`The updated user is ${user.firstName}`);
  };

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
      {isAdding && <AddUser closeAddForm={closeAddForm} />}
      {isUpdating && (
        <UpdateUser
          user={updatedUser}
          closeUpdateForm={() => setIsUpdating(false)}
        />
      )}

      <TableUsers openUpdateForm={openUpdateForm} />
    </div>
  );
}

export default App;
