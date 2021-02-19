import React, { Component } from "react";
import Select from "react-select";
import "./select";

const options = [
  { value: "Select", label: "Select" },
  { value: "Single Select", label: "Single Select" },
  { value: "Multi Select", label: "Multi Select" }
];

const MyComponent = () => <Select className="sel" options={options} />;
export default MyComponent;
