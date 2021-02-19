import React, { Component } from "react";
import "./index.css";
export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <img
          height="50px"
          width="50px"
          src="https://image.shutterstock.com/image-vector/paw-print-icon-vector-illustration-260nw-601681031.jpg"
        />
        <h1>Survey Tiger</h1>
      </div>
    );
  }
}
