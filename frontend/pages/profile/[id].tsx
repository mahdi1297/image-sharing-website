import React from "react";
import UserProfileComponent from "components/user-profole";
import HeaderLayout from "layout/basic-layouts/HeaderLayout";

const ProfileDetailPage = () => {
  return (
    <div>
      <UserProfileComponent />
    </div>
  );
};

ProfileDetailPage.Layout = HeaderLayout;

export default ProfileDetailPage;
