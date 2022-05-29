import React from "react";
import styles from "./style.module.scss";

type Props = {
  multiLevelTab: any;
  tabWindow: any;
  setTabWindow: Function;
};

/**
 *
 * @description This component recieves a list of steps, current tab and current tab setter,
 *              then creates a multi step tab based on steps array data
 * @param multiLevelTab: An array of steps or tabs
 * @param tabWindow: The index of current tab
 * @param setTabWindw: The function wich changes the tab if neccessery
 */
const MultiStep: React.FC<Props> = ({
  multiLevelTab,
  tabWindow,
  setTabWindow,
}) => {
  function setWindowHandler(windwoId: number, isProtected: boolean) {
    if (!isProtected) {
      setTabWindow(windwoId);
    }
  }

  return (
    <>
      <div>
        {/* Menu */}
        <div className={styles.tab__heads}>
          {multiLevelTab &&
            multiLevelTab.length &&
            multiLevelTab.map((s: any) => (
              <li
                key={s.id}
                className={tabWindow === s.id ? styles.active : ""}
              >
                <span></span>
                <p onClick={() => setWindowHandler(s.id, s.isProtected)}>
                  {s.title}
                </p>
              </li>
            ))}
        </div>

        {/* Tab body */}
        {multiLevelTab &&
          multiLevelTab.length &&
          multiLevelTab.map((tab: any) => (
            <div className={styles.tab__body} key={tab.id}>
              {
                <div className={tab.id === tabWindow ? styles.d_b : styles.d_n}>
                  {tab.comoponent}
                </div>
              }
            </div>
          ))}
      </div>
    </>
  );
};

export default MultiStep;
