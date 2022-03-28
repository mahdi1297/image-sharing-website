import React from "react";
import { TabBody, TabHeads } from "./style";

const MultiStep = ({ multiLevelTab, tabWindow, setTabWindow }: any) => {
  function setWindowHandler(windwoId: number, isProtected: boolean) {
    if (!isProtected) {
      setTabWindow(windwoId);
    }
  }

  return (
    <>
      <div>
        {/* Menu */}
        <TabHeads>
          {multiLevelTab &&
            multiLevelTab.length &&
            multiLevelTab.map((s: any) => (
              <li key={s.id} className={tabWindow === s.id ? "active" : ""}>
                <span></span>
                <p onClick={() => setWindowHandler(s.id, s.isProtected)}>
                  {s.title}
                </p>
              </li>
            ))}
        </TabHeads>

        {/* Tab body */}
        {multiLevelTab &&
          multiLevelTab.length &&
          multiLevelTab.map((tab: any) => (
            <TabBody key={tab.id}>
              {
                <div className={tab.id === tabWindow ? "d-b" : "d-n"}>
                  {tab.comoponent}

                  {/* navigator buttons */}
                  {/* <button onClick={() => setNextWindowHandler()} type="submit">
                    Next
                  </button>
                  <button onClick={() => setPrevWindowHandler()} type="button">
                    Prev
                  </button> */}
                </div>
              }
            </TabBody>
          ))}
      </div>
    </>
  );
};

export default MultiStep;
