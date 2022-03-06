import React, { useState } from "react";
import { Container } from "shared/common/style";
import ProfileHeadComponent from "./head";
import GridSharedComponent from "shared/grid";
import TabSharedComponent from "shared/tab";
import { userProfileTabs } from "./UserProfile.tab";

const UserProfileComponent = () => {
  const [tab, setTab] = useState<number>(1);

  return (
    <Container>
      {/* head */}
      <ProfileHeadComponent />

      {/* content */}
      <TabSharedComponent data={userProfileTabs} tab={tab} setTab={setTab} />

      {tab === 1 && <GridSharedComponent showMeta />}
    </Container>
  );
};

export default UserProfileComponent;
