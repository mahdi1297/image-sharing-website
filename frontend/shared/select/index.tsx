import React, { useState } from "react";
import dynamic from "next/dynamic";

const Select = dynamic(() => import("react-select"), {
  ssr: false,
  loading: () => <h1>Loading....</h1>,
});

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const SelectShared = () => {
  const [selectedOption, setSelectedOption] = useState<any>([]);

  return (
    <div>
      <Select
        defaultValue={selectedOption}
        onChange={(e: any) => {
          console.log(e);
          setSelectedOption(e.value);
        }}
        options={options}
      />
    </div>
  );
};

export default SelectShared;
