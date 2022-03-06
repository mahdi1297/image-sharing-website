import React from "react";
import { TabBody } from "./Tab.style";
import { Tab } from "./Tab.model";

const TabSharedComponent = ({ data, tab, setTab }: Tab) => {
  return (
    <>
      <TabBody>
        {data &&
          data.map((t: any) => (
            <li
              key={t.id}
              onClick={() => setTab(t.id)}
              className={tab === t.id ? "active" : ""}
            >
              {t.title}
            </li>
          ))}
      </TabBody>
      <div></div>
    </>
  );
};

export default TabSharedComponent;
