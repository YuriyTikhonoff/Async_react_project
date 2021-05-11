import "./TableUsers.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../../store/actions/userActions.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiTrash } from "react-icons/fi";
import { AiOutlineEdit } from "react-icons/ai";
import Loader from "../Loader/Loader";
import Message from "../Message/Message";

const TableUsers = ({ updateUser, openUpdateForm }) => {
  const usersData = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const { loading, error, users } = usersData;

  const deleteHandler = (id) => {
    dispatch(deleteUser(id));
  };

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
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <tbody>
          {users?.map((user) => (
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
                  onClick={() => deleteHandler(user.id)}
                />
              </td>
            </tr>
          ))}
          )
        </tbody>
      )}
    </table>
  );
};

export default TableUsers;
