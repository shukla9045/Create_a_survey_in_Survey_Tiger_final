import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import "./styles.css";
import { Button } from "react-bootstrap";
import CreateSurvey from "./component/CreateSurvey";

const App = () => {
  const [counter, setCounter] = useState(true);
  const [collectMultidata, setCollectMultiData] = useState([]);
  const [collectSingledata, setCollectSingleData] = useState([]);
  const [publishflag, setPublishFlag] = useState(false);
  const handleClick = () => {
    setCounter(false);
    if (publishflag === true) {
      setCounter(false);
      setPublishFlag(false);
      console.log("multi", collectMultidata);
      console.log("Single", collectSingledata);
    }
  };
  return (
    <div className="App">
      <Header />
      <br />
      <div className="content">
        <CreateSurvey
          click={handleClick}
          collectSingledata={collectSingledata}
          setCollectSingleData={setCollectSingleData}
          collectMultidata={collectMultidata}
          setCollectMultiData={setCollectMultiData}
          setPublishFlag={setPublishFlag}
          publishflag={publishflag}
          counter={counter}
        />
        {counter === true ? (
          <Button variant="primary">Take Survey</Button>
        ) : null}
      </div>
    </div>
  );
};
export default App;
