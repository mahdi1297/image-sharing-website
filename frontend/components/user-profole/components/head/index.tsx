import { ProfileHeadStyle } from "components/user-profole/style";
import React from "react";
import HeadInfo from "./HeadInfo";
import UserData from "./UserData";

const ProfileHead = () => {
  return (
    <ProfileHeadStyle>
      <HeadInfo />
      <UserData />
    </ProfileHeadStyle>
  );
};

export default ProfileHead;
