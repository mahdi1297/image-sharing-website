import React from "react";
import { AlignCenter, Grid } from "shared/common/style";
import { MetaBody } from "../Images.style";
import ButtonComponent from "shared/button";
import Icon from "shared/icons";
import { Theme } from "theme/theme";
import { metaDataSeed } from "./ImagesMeta.seed";

const ImageMetaComponent = () => {
  return (
    <>
      <MetaBody>
        <Grid direction="column" align="flex-start" justify="flex-start">
          <div>
            <AlignCenter>
              <ButtonComponent color="gray" size="md">
                <Icon type="share" size={14} color={Theme.colors.gray} />
                <span>Share</span>
              </ButtonComponent>
              <ButtonComponent color="danger" size="md">
                <Icon type="report" size={14} color={Theme.colors.danger} />
                <span>Report</span>
              </ButtonComponent>
              <ButtonComponent color="light" size="md">
                <Icon type="heart" size={14} color={Theme.colors.gray} />
                <span>165</span>
              </ButtonComponent>
            </AlignCenter>
          </div>
          <div>
            <ul>
              {metaDataSeed.map((mt) => (
                <li key={mt.id}>
                  <div>
                    <Icon
                      type={mt.icon}
                      size={mt.iconSize}
                      color={mt.iconColor}
                    />
                  </div>
                  <p>{mt.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </Grid>
      </MetaBody>
    </>
  );
};

export default ImageMetaComponent;
