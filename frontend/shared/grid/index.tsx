/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Container } from "shared/common/style";
import { imagesList } from "./images";
import { Body } from "./style";
import GridItemComponent from "./grid-item";

const GridShared = ({ showMeta, images }: any) => {
  return (
    <Body>
      <Container>
        <div className="masonry">
          {images
            ? images.map((x: any) => (
                <GridItemComponent key={x._id} data={x} showMeta={showMeta} />
              ))
            : imagesList.map((x: any) => (
                <GridItemComponent key={x.id} data={x} showMeta={showMeta} />
              ))}
        </div>
      </Container>
    </Body>
  );
};

export default GridShared;
