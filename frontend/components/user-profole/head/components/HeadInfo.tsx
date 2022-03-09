import React from "react";
import Avatar from "shared/avatar";
import {AlignCenter} from "shared/common/style";
import {HeadInfoStyle} from "./../../UserProfile.style";

type componentType = {}

const HeadInfo: React.FC<componentType> = () => {
    return (
        <HeadInfoStyle>
            <AlignCenter>
                <Avatar width="70px" radius="10px" id="10"/>
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
        </HeadInfoStyle>
    );
};

export default HeadInfo;
