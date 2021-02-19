import React, { Component } from "react";

import Buttons from "./component/Buttons";

const CreateButton = () => {
  return (
    <div className="App">
      <div className="content">
        <Buttons content={"Create Survey"} />
      </div>
    </div>
  );
};
export default CreateButton;
