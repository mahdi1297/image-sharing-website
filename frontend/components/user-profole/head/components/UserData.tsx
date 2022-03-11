import { UserDataStyle } from "../../style";
import React from "react";
import ButtonComponent from "shared/button";
import { GRAY, PRIMARY, XL } from "constaints/consts";

const UserData = () => {
  return (
    <UserDataStyle>
      <div className="user-data">
        <strong>Mahdi Alipoor</strong>
        <p>This is my description</p>
        <p>London, Qom</p>
      </div>
      <div className="user-ctas">
        <ButtonComponent size={XL} color={GRAY}>
          Message
        </ButtonComponent>
        <ButtonComponent size={XL} color={PRIMARY}>
          Follow
        </ButtonComponent>
      </div>
    </UserDataStyle>
  );
};

export default UserData;
