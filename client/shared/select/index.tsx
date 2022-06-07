import React from "react";
import dynamic from "next/dynamic";
import Spinner from "@shared/spinner";
import { categoryOptions } from "@consts/data";
import styles from "./style.module.scss";

const SelectDynamic = dynamic(() => import("react-select"), {
  ssr: false,
  loading: () => <Spinner />,
});

type Props = {
  selectedOption?: any;
  setSelectedOption: Function;
  label: string;
  isSubmitted?: boolean;
  options?: any;
};

const Select: React.FC<Props> = ({
  selectedOption,
  setSelectedOption,
  label,
  isSubmitted,
  options = [],
}) => {
  //
  const selectOption = (e: any) => {
    setSelectedOption(e);
  };

  return (
    <div className={styles.select__body}>
      <div className="label">{label}</div>

      <div className="mt-10">
        <SelectDynamic
          defaultValue={selectedOption}
          isMulti
          name="colors"
          onChange={(e) => selectOption(e)}
          options={options || categoryOptions}
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </div>

      {isSubmitted && selectedOption.length === 0 && (
        <p className="mt-5">Categories filed is required</p>
      )}
    </div>
  );
};

export default Select;
