import React, { Component } from "react";
import { useState } from "react";
const Select = ({ select, setSelect }) => {
  const [value, setValue] = useState("Select");
  // constructor(props) {
  //   super(props);
  // this.state = { value: "Select" };

  // this.handleChange = this.handleChange.bind(this);
  //this.handleSubmit = this.handleSubmit.bind(this);

  const handleChange = (value) => {
    setValue(value);
  };

  const handleSubmit = (event) => {
    //this.props.select = event.target.value;

    alert("your choice is : " + event.target.value);
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select your choice:
        <select value={value} onChange={handleChange}>
          <option value="select">select</option>
          <option value="MultiSelect">Multi Select</option>
          <option value="SingleSelect">Single Select</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};
export default Select;
