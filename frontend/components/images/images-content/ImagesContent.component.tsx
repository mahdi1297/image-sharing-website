import React, { useState } from "react";
import TabSharedComponent from "shared/tab";
import { ContentWrapper, Tab } from "../Images.style";
import ImagesCommentsComponent from "./images-comments";
import { TabModel } from "./ImagesContent.TabData";
import UserOtherImagesComponent from "./user-other-images";

const ImagesContentComponent = () => {
  const [selectedTab, setSelectedTab] = useState<number>(1);

  return (
    <ContentWrapper>
      <TabSharedComponent
        data={TabModel}
        tab={selectedTab}
        setTab={setSelectedTab}
      />
      {selectedTab === 1 && <UserOtherImagesComponent />}
      {selectedTab === 2 && <ImagesCommentsComponent />}
    </ContentWrapper>
  );
};

export default ImagesContentComponent;
