import React, { useState } from "react";
import "./index.css";
import { Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
const SingleSelect = () => {
  const [inputFields, setInputFields] = useState([
    { firstName: "" },
    { firstName: "" }
  ]);
  const [count, setCount] = useState({ count: 0 });
  const handleAddFields = () => {
    setInputFields([...inputFields, { id: uuidv4(), firstName: "" }]);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
    console.log("countis", count);
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });
    setCount({ count: count + 1 });
    setInputFields(newInputFields);
  };
  return (
    <div className="multicss">
      <h3>do you have linkdn installed in your phone?</h3>
      <p>option</p>
      <form>
        {inputFields.map((inputField, index) => (
          <div key={index}>
            <input
              type="text"
              value={inputField.firstname}
              onChange={(event) => handleChangeInput(inputField.id, event)}
            />
            <Button onClick={handleAddFields}>+</Button>{" "}
            <Button
              disabled={inputFields.length === 1}
              onClick={() => handleRemoveFields(inputField.id)}
            >
              -
            </Button>{" "}
          </div>
        ))}
        <Button onClick={handleSubmit}>Send</Button>{" "}
      </form>
    </div>
  );
};

export default SingleSelect;
