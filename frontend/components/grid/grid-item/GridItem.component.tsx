/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { userAvatar } from "constaints/Data.const";
import Link from "next/link";
import React from "react";
import { AlignCenter } from "shared/common/style";
import Icon from "shared/icons";
import { Theme } from "theme/theme";
import { Card } from "../Grid.style";

const GridItemComponent = ({ data }: any) => {
  return (
    <>
      <Card>
        <div className="mItem">
          <div className="ph_user">
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
              <p>
                <Link href="/">
                  <a>Mahdi Alipoor</a>
                </Link>
              </p>
            </AlignCenter>
          </div>
          <Link href="/">
            <a>
              <img src={data.path} />
            </a>
          </Link>
          <div className="mItem-meta">
            <AlignCenter>
              <span>
                <AlignCenter>
                  <Icon type="heart" color={Theme.colors.gray} size={25} />
                  <span className="grid_meta">125</span>
                </AlignCenter>
              </span>
              <span>
                <AlignCenter>
                  <Icon type="message" color={Theme.colors.gray} size={25} />
                  <span className="grid_meta">125</span>
                </AlignCenter>
              </span>
            </AlignCenter>
          </div>
        </div>
      </Card>
    </>
  );
};

export default GridItemComponent;
