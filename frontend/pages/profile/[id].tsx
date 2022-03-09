import React from "react";
import UserProfile from "components/user-profole";
import HeaderLayout from "layout/basic-layouts/HeaderLayout";

const ProfileDetailPage = () => {
  return (
    <div>
      <UserProfile />
    </div>
  );
};

ProfileDetailPage.Layout = HeaderLayout;

export default ProfileDetailPage;
