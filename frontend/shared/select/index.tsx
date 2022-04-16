import React, { useState } from "react";
import dynamic from "next/dynamic";
import { SelectBody } from "./style";
import { categoryOptions } from "constaints/data.const";
import ErrorShared from "shared/error";

const Select = dynamic(() => import("react-select"), {
  ssr: false,
  loading: () => <h1>Loading....</h1>,
});

const SelectShared = ({
  selectedOption,
  setSelectedOption,
  label,
  isSubmitted,
  options,
}: any) => {
  return (
    <SelectBody>
      <div className="label">{label}</div>
      <Select
        defaultValue={selectedOption}
        isMulti
        name="colors"
        onChange={(e) => setSelectedOption(e)}
        options={options || categoryOptions}
        className="basic-multi-select"
        classNamePrefix="select"
      />
      {isSubmitted && selectedOption.length === 0 && (
        <ErrorShared message="Categories filed is required" />
      )}
    </SelectBody>
  );
};

export default SelectShared;
