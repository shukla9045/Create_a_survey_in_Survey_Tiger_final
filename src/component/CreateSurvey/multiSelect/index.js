import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "../Form/index";
const MultiSelect = ({
  collectMultidata,
  setCollectMultiData,
  setPublishFlag
}) => {
  const [addForm, setAddForm] = useState([]);
  const [addnotify, setAddnotify] = useState(false);
  const handleClick = (event) => {
    setAddForm(
      addForm.concat(
        <Form
          collectMultidata={collectMultidata}
          setCollectMultiData={setCollectMultiData}
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
          addnotify={addnotify}
          setAddnotify={setAddnotify}
          collectMultidata={collectMultidata}
          setCollectMultiData={setCollectMultiData}
        />
        {addForm}
      </div>
      <Button onClick={handleClick}>Add Quesion</Button>{" "}
      <Button onClick={handlePublish}>Publish</Button>
    </div>
  );
};

export default MultiSelect;
