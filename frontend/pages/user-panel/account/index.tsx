import React from "react";
import UserPanelLayout from "layout/basic-layouts/user-panel";
import Accounts from "components/user-profole/pages/account";

const UserPanelAccount = () => {
  return (
    <div>
      <Accounts />
    </div>
  );
};

UserPanelAccount.Layout = UserPanelLayout;

export default UserPanelAccount;
