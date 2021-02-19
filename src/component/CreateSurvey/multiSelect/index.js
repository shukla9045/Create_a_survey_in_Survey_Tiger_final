import React, { useState } from "react";
import "./index.css";
import { Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
const MultiSelect = () => {
  const [inputFields, setInputFields] = useState([{ firstName: "" }]);
  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      { id: uuidv4(), firstName: "", lastName: "" }
    ]);
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
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };
  return (
    <div className="multicss">
      <h3>which of the follwing app you have in your phone?</h3>
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

export default MultiSelect;