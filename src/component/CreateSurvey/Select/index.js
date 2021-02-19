import React, { Component } from "react";

export default class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "Select" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.props.select = event.target.value;
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Select your choice:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="select">select</option>
            <option value="MultiSelect">Multi Select</option>
            <option value="SingleSelect">Single Select</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
