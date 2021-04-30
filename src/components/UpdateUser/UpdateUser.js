//import "./AddUser.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../store/actions/userActions";

const UpdateUser = ({ user, closeUpdateForm }) => {
  const [formState, setFormState] = useState({ ...user });
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
    //console.log(formState);
  };

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formState);
    dispatch(updateUser(formState));
    closeUpdateForm();
  };

  return (
    <>
      <form onSubmit={submitHandler} className="form-container">
        <div className="form-item">
          <label>
            First name
            <input
              onChange={inputHandler}
              name="firstName"
              value={formState.firstName}
            ></input>
          </label>
        </div>
        <div className="form-item">
          <label>
            Last name
            <input
              onChange={inputHandler}
              name="lastName"
              value={formState.lastName}
            ></input>
          </label>
        </div>
        <div className="form-item">
          <label>
            Email
            <input
              onChange={inputHandler}
              name="email"
              value={formState.email}
            ></input>
          </label>
        </div>
        <div className="form-item">
          <button
            onClick={closeUpdateForm}
            type="button"
            style={{ marginRight: "10px" }}
          >
            Cancel
          </button>
          <button type="submit">Update</button>
        </div>
      </form>
    </>
  );
};

export default UpdateUser;
