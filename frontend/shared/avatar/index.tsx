import React from "react";
import Link from "next/link";
import { AlignCenter } from "shared/common/style";
import { AvatarBody } from "./style";
import { Theme } from "theme/theme";
import { AvatarModel } from "./model";
import { userAvatar } from "constaints/Data.const";

const AvatarComponent = ({ radius, width, id }: AvatarModel) => {
  return (
    <AvatarBody radius={radius} width={width}>
      <AlignCenter>
        <div className="ph_user-image">
          <AlignCenter>
            <Link href={`/profile/${id}`}>
              <a>
                <img src={userAvatar} />
              </a>
            </Link>
          </AlignCenter>
        </div>
        <p style={{ paddingBottom: "3px" }}>
          <Link href={`/profile/${id}`}>
            <a
              style={{
                fontSize: "14px",
                marginLeft: "8px",
                color: Theme.colors.gray,
              }}
            >
              Mahdi Alipoor
            </a>
          </Link>
        </p>
      </AlignCenter>
    </AvatarBody>
  );
};

export default AvatarComponent;
