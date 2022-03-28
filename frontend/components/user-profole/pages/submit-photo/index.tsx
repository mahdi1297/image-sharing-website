import React, { useState, useEffect } from "react";
import { Container } from "shared/common/style";
import MultiStep from "shared/multi-step";
import CreateImageContext from "./context";
import { multiStepData } from "./multiStepData";

/* eslint-disable react-hooks/exhaustive-deps */

const SubmitPhoto = () => {
  const [tabWindow, setTabWindow] = useState(1);
  const [multiLevelTab, setMultiLevelTab] = useState([]);
  const [imageData, setImageData] = useState([]);

  let steps: any = multiStepData(
    setNextWindowHandler,
    setPrevWindowHandler,
    setImageData
  );

  useEffect(() => {
    setMultiLevelTab(steps);
  }, []);

  function setNextWindowHandler() {
    setTabWindow(2);
  }
  function setPrevWindowHandler() {
    setTabWindow(1);
  }

  return (
    <div>
      <CreateImageContext.Provider
        value={{
          images: imageData,
        }}
      >
        <Container>
          <MultiStep
            multiLevelTab={multiLevelTab}
            tabWindow={tabWindow}
            setTabWindow={setTabWindow}
          />
        </Container>
      </CreateImageContext.Provider>
    </div>
  );
};

export default SubmitPhoto;
