import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import "./styles.css";
import MyComponent from "./component/test/select";
import { Button } from "react-bootstrap";
import CreateSurvey from "./component/CreateSurvey";
import MultiSelect from "./component/CreateSurvey/multiSelect/index";
// const handleClick = () =>{indexindex
//     this.setState(true);
// };
const App = () => {
  const [counter, setCounter] = useState(true);
  const [select, setSelect] = useState("select");
  const handleClick = () => {
    setCounter(false);
  };
  const handleSelect = () => {
    setSelect(select);
  };
  return (
    <div className="App">
      <Header />
      <MultiSelect />
      <div className="content">
        <CreateSurvey
          click={handleClick}
          counter={counter}
          select={select}
          setSelect={handleSelect}
        />
        <h1>{select}</h1>
        {counter === true ? (
          <Button variant="primary">Take Survey</Button>
        ) : null}
      </div>
    </div>
  );
};
export default App;
