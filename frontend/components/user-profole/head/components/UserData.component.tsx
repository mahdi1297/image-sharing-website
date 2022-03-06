import { UserData } from "components/user-profole/UserProfile.style";
import React from "react";
import ButtonComponent from "shared/button";

const UserDataComponent = () => {
  return (
    <UserData>
      <div className="user-data">
        <strong>Mahdi Alipoor</strong>
        <p>This is my description</p>
        <p>London, Qom</p>
      </div>
      <div className="user-ctas">
        <ButtonComponent size="xl" color="primary">
          Message
        </ButtonComponent>
        <ButtonComponent size="xl" color="primary">
          Follow
        </ButtonComponent>
      </div>
    </UserData>
  );
};

export default UserDataComponent;
