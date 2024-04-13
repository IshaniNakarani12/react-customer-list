import React, { useState } from "react";
import { Display } from "./Display";

const initialState = "";

export const Form = ({ getNewUserName }) => {
  const [name, setName] = useState("initialState");

  const handleOnChange = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    getNewUserName(name);
    setName("initialState");
  };

  return (
    <div>
      <Display name={name} />
      <form action="" onSubmit={handleOnSubmit}>
        <input value={name} type="text" onChange={handleOnChange}></input>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};
