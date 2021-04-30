import "./AddUser.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/actions/userActions";
import axios from "axios";

const AddUser = ({ closeAddForm }) => {
  const [formState, setFormState] = useState({});

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
    //console.log(formState);
  };

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitted");
    console.log({ ...formState, id: Date.now() });
    dispatch(addUser({ ...formState, id: Date.now() }));
    closeAddForm();
  };

  return (
    <>
      <form onSubmit={submitHandler} className="form-container">
        <div className="form-item">
          <label>
            First name
            <input onChange={inputHandler} name="firstName"></input>
          </label>
        </div>
        <div className="form-item">
          <label>
            Last name
            <input onChange={inputHandler} name="lastName"></input>
          </label>
        </div>
        <div className="form-item">
          <label>
            Email
            <input onChange={inputHandler} name="email"></input>
          </label>
        </div>
        <div className="form-item">
          <button
            onClick={closeAddForm}
            type="button"
            style={{ marginRight: "10px" }}
          >
            Cancel
          </button>
          <button type="submit">Add user</button>
        </div>
      </form>
    </>
  );
};

export default AddUser;
