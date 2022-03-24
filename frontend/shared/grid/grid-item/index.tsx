/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Icon from "shared/icons";
import AvatarComponent from "shared/avatar";
import ButtonComponent from "shared/button";
import { AlignCenter } from "shared/common/style";
import { Theme } from "theme/theme";
import { Card } from "../style";
import { LIGHT, SM } from "constaints/consts";

const GridItemComponent = ({ data, showMeta }: any) => {
  return (
    <>
      <Card>
        <div className="mItem">
          {showMeta && (
            <div className="ph_user">
              <AvatarComponent
                id={data._id}
                username={data.user.username}
                profile={data.user.profile}
              />
            </div>
          )}
          <Link href={`/images/${data._id}`}>
            <a>
              <img src={data.linkes.path} />
            </a>
          </Link>
          {showMeta && (
            <div className="mItem-meta">
              <AlignCenter>
                <ButtonComponent size={SM} color={LIGHT}>
                  <Icon type="heart" color={Theme.colors.danger} size={20} />
                  <span className="grid_meta">{data.likes}</span>
                </ButtonComponent>
                <ButtonComponent size={SM} color={LIGHT}>
                  <Icon type="heart" color={Theme.colors.gray} size={20} />
                  <span className="grid_meta">{data.downloads}</span>
                </ButtonComponent>
              </AlignCenter>
            </div>
          )}
        </div>
      </Card>
    </>
  );
};

export default GridItemComponent;
