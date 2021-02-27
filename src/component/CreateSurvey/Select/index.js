import React, { useState } from "react";
import Select from "react-select";
import Publish from "../../Publish/index";
import MultiSelect from "../multiSelect/index";
import SingleSelect from "../singleSelect/index";
const options = [
  { value: "SingleSelect", label: " Single-Select" },
  { value: "MultiSelect", label: "multi-Select" }
];

const MyComponent = ({
  collectSingledata,
  setCollectSingleData,
  collectMultidata,
  setCollectMultiData,
  setPublishFlag,
  publishflag
}) => {
  const [value, setValue] = useState({
    selectedOption: null
  });
  const [select, setSelect] = useState({ select: null });
  // const [publishflag, setPublishFlag] = useState(false);

  const handleChange = (selectedOption) => {
    setValue({ selectedOption });
    setSelect(selectedOption.value);
    console.log(`Option selected:`, selectedOption.value);
    // console.log(collectMultidata);
    // console.log(collectSingledata);
  };
  const { selectedOption } = { value };
  return (
    <>
      {publishflag ? (
        <Publish
          collectSingledata={collectSingledata}
          setCollectSingleData={setCollectSingleData}
          collectMultidata={collectMultidata}
          setCollectMultiData={setCollectMultiData}
        />
      ) : (
        <div>
          <Select
            value={selectedOption}
            placeholder={"Select Question Type"}
            onChange={handleChange}
            options={options}
          />
          {select === "MultiSelect" ? (
            <MultiSelect
              collectMultidata={collectMultidata}
              setCollectMultiData={setCollectMultiData}
              setPublishFlag={setPublishFlag}
            />
          ) : select === "SingleSelect" ? (
            <SingleSelect
              collectSingledata={collectSingledata}
              setCollectSingleData={setCollectSingleData}
              setPublishFlag={setPublishFlag}
            />
          ) : null}
        </div>
      )}
    </>
  );
};

export default MyComponent;
