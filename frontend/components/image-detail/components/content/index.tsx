import React, { useState } from "react";
import TabSharedComponent from "shared/tab";
import { ContentWrapper, Tab } from "../../style";
import ImagesComments from "./components/ImagesComments";
import UserImages from "./components/UserImages";
import { TabModel } from "./tabData";

const ImagesContentComponent = ({ tags }: any) => {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <ContentWrapper>
      <TabSharedComponent
        data={TabModel}
        tab={selectedTab}
        setTab={setSelectedTab}
      />
      {/* {selectedTab === 1 && <UserImages />}
      {selectedTab === 2 && <ImagesComments />} */}
    </ContentWrapper>
  );
};

export default ImagesContentComponent;
