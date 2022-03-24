import React from "react";
import UserPanelLayout from "layout/basic-layouts/user-panel";
import SubmitPhoto from "components/user-profole/pages/submit-photo";

const UserPanelSubmitPhoto = () => {
  return (
    <div>
      <SubmitPhoto />
    </div>
  );
};

UserPanelSubmitPhoto.Layout = UserPanelLayout;

export default UserPanelSubmitPhoto;
