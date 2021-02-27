import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "../Form2/index";

const SingleSelect = ({
  collectSingledata,
  setCollectSingleData,
  setPublishFlag
}) => {
  const [addForm, setAddForm] = useState([]);
  const handleClick = (event) => {
    setAddForm(
      addForm.concat(
        <Form
          collectSingledata={collectSingledata}
          setCollectSingleData={setCollectSingleData}
        />
      )
    );
    return;
  };
  const handlePublish = () => {
    setPublishFlag(true);
  };
  return (
    <div>
      <div>
        <Form
          collectSingledata={collectSingledata}
          setCollectSingleData={setCollectSingleData}
        />
        {addForm}
      </div>
      <Button onClick={handleClick}>Add Quesion</Button>{" "}
      <Button onClick={handlePublish}>Publish</Button>
    </div>
  );
};

export default SingleSelect;
