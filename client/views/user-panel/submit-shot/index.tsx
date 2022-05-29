import React, { useEffect, useState } from "react";
import MultiStep from "@shared/multi-step";
import { SubmitShotContext } from "./context";
import { multiStepData } from "./steps";

const ViewSubmitShot = () => {
  const [tabWindow, setTabWindow] = useState(1);
  const [multiLevelTab, setMultiLevelTab] = useState<any>([]);

  useEffect(() => {
    setMultiLevelTab(() =>
      multiStepData(setNextWindowHandler, setPrevWindowHandler)
    );
  }, []);

  function setNextWindowHandler() {
    setTabWindow(2);
  }

  function setPrevWindowHandler() {
    setTabWindow(1);
  }

  return (
    <div>
      <SubmitShotContext.Provider value={{ data: [] }}>
        <MultiStep
          multiLevelTab={multiLevelTab}
          tabWindow={tabWindow}
          setTabWindow={setTabWindow}
        />
      </SubmitShotContext.Provider>
    </div>
  );
};

export default ViewSubmitShot;
