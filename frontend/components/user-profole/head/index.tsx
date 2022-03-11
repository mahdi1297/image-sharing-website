import React from "react";
import { ProfileHeadStyle } from "../style";
import HeadInfo from "./components/HeadInfo";
import UserData from "./components/UserData";

const ProfileHead = () => {
  return (
    <ProfileHeadStyle>
      <HeadInfo />
      <UserData />
    </ProfileHeadStyle>
  );
};

export default ProfileHead;
