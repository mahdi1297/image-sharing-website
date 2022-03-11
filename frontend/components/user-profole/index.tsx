import React, { useState } from "react";
import { Container } from "shared/common/style";
import ProfileHead from "./head";
import GridSharedComponent from "shared/grid";
import TabSharedComponent from "shared/tab";
import { userProfileTabs } from "./tabData";

const UserProfile = () => {
  const [tab, setTab] = useState<number>(1);

  return (
    <Container>
      {/* head */}
      <ProfileHead />

      {/* content */}
      <TabSharedComponent data={userProfileTabs} tab={tab} setTab={setTab} />

      {tab === 1 && <GridSharedComponent showMeta />}
    </Container>
  );
};

export default UserProfile;
