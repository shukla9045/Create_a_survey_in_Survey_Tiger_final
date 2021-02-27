import Select from "./Select/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./styles.css";
import React, { useState } from "react";

const CreateSurvey = ({
  click,
  counter,
  collectSingledata,
  setCollectSingleData,
  collectMultidata,
  setCollectMultiData,
  setPublishFlag,
  publishflag
}) => {
  return (
    <div className="App">
      <div className="content">
        <Button onClick={click} variant="primary">
          Create Survey
        </Button>
        <br />
        <br />
        {counter === false ? (
          <Select
            collectSingledata={collectSingledata}
            setCollectSingleData={setCollectSingleData}
            collectMultidata={collectMultidata}
            setCollectMultiData={setCollectMultiData}
            setPublishFlag={setPublishFlag}
            publishflag={publishflag}
          />
        ) : null}
      </div>
      <div>{/* <button onClick={next}>Next</button> */}</div>
    </div>
  );
};
export default CreateSurvey;
