import React, { useState } from "react";
import "./index.css";
import { Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
const Form = ({ collectMultidata, setCollectMultiData }) => {
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), options: "" }
  ]);
  const handleAddFields = () => {
    setInputFields([...inputFields, { id: uuidv4(), options: "" }]);
  };
  const [question, setQuestion] = useState({ quest: "" });
  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };
  const handleSubmit = (e) => {
    setCollectMultiData([...collectMultidata, question, inputFields]);
    e.preventDefault();
    console.log("quest", question);
    console.log("InputFields", inputFields);
    // console.log("collect", collectMultidata);
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i.options = event.target.value;
      }
      return i;
    });
    console.log();
    setInputFields(newInputFields);
  };
  const handleQuestion = (event) => {
    setQuestion({ quest: event.target.value });
  };

  return (
    <div className="multicss">
      <form>
        <h3>
          <input
            type="text"
            placeholder="type question here"
            onChange={handleQuestion}
          />
        </h3>
        multi options:
        {inputFields.map((inputField, index) => (
          <div key={index}>
            <input
              type="text"
              value={inputField.options}
              onChange={(event) => handleChangeInput(inputField.id, event)}
            />
            <Button
              onClick={handleAddFields}
              disabled={inputFields.length >= 4}
            >
              +
            </Button>{" "}
            <Button
              disabled={inputFields.length === 1}
              onClick={() => handleRemoveFields(inputField.id)}
            >
              -
            </Button>{" "}
          </div>
        ))}
        <Button onClick={handleSubmit}>Save</Button>{" "}
      </form>
    </div>
  );
};

export default Form;
