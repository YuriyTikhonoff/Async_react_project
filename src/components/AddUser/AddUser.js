import "./AddUser.css";
import { useState } from "react";
import axios from "axios";

const AddUser = ({ addUser }) => {
  const [formState, setFormState] = useState({});

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
    //console.log(formState);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitted");
    addUser(formState);
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
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default AddUser;
