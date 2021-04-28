import "./TableUsers.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiTrash } from "react-icons/fi";
import { AiOutlineEdit } from "react-icons/ai";

const TableUsers = ({ users, deleteUser, updateUser, openUpdateForm }) => {
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th> Email</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>
              <AiOutlineEdit
                style={{ cursor: "pointer" }}
                onClick={() => openUpdateForm(user)}
              />

              <FiTrash
                style={{ cursor: "pointer", marginLeft: "10px" }}
                onClick={() => deleteUser(user.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableUsers;
