import React from "react";
import { AlignCenter, Justify } from "shared/common/style";
import ButtonComponent from "shared/button";
import AvatarComponent from "shared/avatar";
import Icon from "shared/icons";
import GridSharedComponent from "shared/grid";
import { Theme } from "theme/theme";
import ImageMetaComponent from "./images-meta";
import { ADD_TO_COLLOCTION } from "constaints/Messages.const";

let imageSrc =
  "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";

const ImageMainComponent = () => {
  return (
    <>
      <section>
        <AlignCenter>
          <AvatarComponent id="10" />

          <ButtonComponent color="gray" size="md">
            <Icon type="heart" size={14} color={Theme.colors.gray} />
            <span>Like</span>
          </ButtonComponent>

          <ButtonComponent color="gray" size="md">
            <Icon type="colloction" size={14} color={Theme.colors.gray} />
            <span>{ADD_TO_COLLOCTION}</span>
          </ButtonComponent>
        </AlignCenter>
      </section>

      <div className="main-image-container">
        <Justify>
          <img src={imageSrc} height="100%" width="auto" />
        </Justify>
        <ImageMetaComponent />
      </div>
      <GridSharedComponent showMeta />
    </>
  );
};

export default ImageMainComponent;
