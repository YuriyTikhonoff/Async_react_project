//import "./AddUser.css";
import { useState, useEffect } from "react";

const UpdateUser = ({ updateUser, user, closeUpdateForm }) => {
  const [formState, setFormState] = useState({ ...user });
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
    //console.log(formState);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formState);
    updateUser(formState);
    setTimeout(() => closeUpdateForm(), 1500);
    //setFormState({ ...user });
    //addUser(formState);
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
