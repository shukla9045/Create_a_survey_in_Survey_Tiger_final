import React, { useState } from "react";
import Select from "react-select";
import MultiSelect from "../multiSelect/index";
import SingleSelect from "../singleSelect/index";
const options = [
  { value: "SingleSelect", label: " Single-Select" },
  { value: "MultiSelect", label: "multi-Select" }
];

const MyComponent = () => {
  const [value, setValue] = useState({
    selectedOption: null
  });
  const [select, setSelect] = useState({ select: null });
  // state = {
  //   selectedOption: null
  // };

  const handleChange = (selectedOption) => {
    setValue({ selectedOption });
    setSelect(selectedOption.value);
    console.log(`Option selected:`, selectedOption.value);
  };
  const { selectedOption } = { value };

  return (
    <>
      <Select
        value={selectedOption}
        placeholder={"Select Question Type"}
        onChange={handleChange}
        options={options}
      />
      {select == "MultiSelect" ? (
        <MultiSelect />
      ) : select == "SingleSelect" ? (
        <SingleSelect />
      ) : null}
    </>
  );
};

export default MyComponent;
