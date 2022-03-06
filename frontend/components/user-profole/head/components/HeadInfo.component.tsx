import React from "react";
import Avatar from "shared/avatar";
import { AlignCenter } from "shared/common/style";
import { HeadInfo } from "./../../UserProfile.style";

const HeadInfoComponent = () => {
  return (
    <HeadInfo>
      <AlignCenter>
        <Avatar width="70px" radius="10px" />
        <ul>
          <li>
            <strong>21</strong>
            <div>Images</div>
          </li>
          <li>
            <strong>1358</strong>
            <div>Followers</div>
          </li>
          <li>
            <strong>120</strong>
            <div>Followings</div>
          </li>
        </ul>
      </AlignCenter>
    </HeadInfo>
  );
};

export default HeadInfoComponent;
