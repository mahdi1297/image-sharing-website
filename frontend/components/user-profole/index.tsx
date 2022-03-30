import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Container } from "shared/common/style";
import TabSharedComponent from "shared/tab";
import ProfileHead from "./components/head";
// import ProfileImages from "./components/images";
import { userProfileTabs } from "./tabData";

const ProfileImages = dynamic(() => import("./components/images"));

const UserProfile = ({ slug }: any) => {
  const [tab, setTab] = useState<number>(1);

  return (
    <Container>
      {/* head */}
      <ProfileHead />

      {/* content */}
      <TabSharedComponent data={userProfileTabs} tab={tab} setTab={setTab} />

      {tab === 1 && <ProfileImages slug={slug} />}
    </Container>
  );
};

export default UserProfile;
