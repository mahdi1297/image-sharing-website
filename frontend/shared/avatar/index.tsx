import React from "react";
import Link from "next/link";
import { AlignCenter } from "shared/common/style";
import { AvatarBody } from "./style";
import { Theme } from "theme/theme";
import { AvatarModel } from "./model";
import { userAvatar } from "constaints/data.const";

const AvatarShared = ({
  radius,
  width,
  id,
  username,
  profile,
}: AvatarModel) => {
  //

  return (
    <AvatarBody radius={radius} width={width}>
      <AlignCenter>
        <div className="ph_user-image">
          <AlignCenter>
            <Link href={`/profile/${username}`}>
              <a>
                {/* <img
                  src={
                    profile ? `http://localhost:7000/${profile}` : userAvatar
                  }
                /> */}
                <img src={userAvatar} />
              </a>
            </Link>
          </AlignCenter>
        </div>
        <p style={{ paddingBottom: "3px" }}>
          <Link href={`/profile/${username}`}>
            <a
              style={{
                fontSize: "14px",
                marginLeft: "8px",
                color: Theme.colors.gray,
              }}
            >
              {username ? username : "Mahdi Alipoor"}
            </a>
          </Link>
        </p>
      </AlignCenter>
    </AvatarBody>
  );
};

export default AvatarShared;
