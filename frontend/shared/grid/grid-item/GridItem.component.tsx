/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import AvatarComponent from "shared/avatar";
import { AlignCenter } from "shared/common/style";
import Icon from "shared/icons";
import { Theme } from "theme/theme";
import { Card } from "../Grid.style";

const GridItemComponent = ({ data, showMeta }: any) => {
  return (
    <>
      <Card>
        <div className="mItem">
          <div className="ph_user">{showMeta && <AvatarComponent />}</div>
          <Link href={`/images/${data.id}`}>
            <a>
              <img src={data.path} />
            </a>
          </Link>
          {showMeta && (
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
          )}
        </div>
      </Card>
    </>
  );
};

export default GridItemComponent;
