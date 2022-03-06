import React, { useState } from "react";
import { Grid } from "shared/common/style";
import { ProfileHead } from "../UserProfile.style";
import HeadInfoComponent from "./components/HeadInfo.component";
import UserDataComponent from "./components/UserData.component";

const ProfileHeadComponent = () => {
  return (
    <ProfileHead>
      <Grid direction="column" justify="flex-start" align="flex-start">
        <HeadInfoComponent />
        <UserDataComponent />
      </Grid>
    </ProfileHead>
  );
};

export default ProfileHeadComponent;
