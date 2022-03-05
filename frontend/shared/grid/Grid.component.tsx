/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Container } from "shared/common/style";
import { imagesList } from "./Grid.images";
import { Body } from "./Grid.style";
import GridItemComponent from "./grid-item";

const GridSharedComponent = ({ showMeta }: any) => {
  return (
    <Body>
      <Container>
        <div className="masonry">
          {imagesList.map((x: any) => (
            <GridItemComponent key={x.id} data={x} showMeta={showMeta} />
          ))}
        </div>
      </Container>
    </Body>
  );
};

export default GridSharedComponent;
