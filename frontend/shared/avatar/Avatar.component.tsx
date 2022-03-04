import React from "react";
import Link from "next/link";
import { AlignCenter } from "shared/common/style";
import { userAvatar } from "constaints/Data.const";
import { AvatarBody } from "./Avatar.style";
import { Theme } from "theme/theme";

const AvatarComponent = () => {
  return (
    <AvatarBody>
      <AlignCenter>
        <div className="ph_user-image">
          <AlignCenter>
            <Link href="/">
              <a>
                <img src={userAvatar} />
              </a>
            </Link>
          </AlignCenter>
        </div>
        <p style={{ paddingBottom: "3px" }}>
          <Link href="/">
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
