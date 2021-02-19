import Select from "./Select/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./styles.css";
import React from "react";

const CreateSurvey = ({ click, counter, select, setSelect }) => {
  // const { next } = navigation;
  return (
    <div className="App">
      <div className="content">
        <Button onClick={click} variant="primary">
          Create Survey
        </Button>
        {counter === false ? (
          <Select select={select} setSelect={setSelect} />
        ) : null}
      </div>
      <div>{/* <button onClick={next}>Next</button> */}</div>
    </div>
  );
};
export default CreateSurvey;
