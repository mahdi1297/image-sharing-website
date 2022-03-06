import React from "react";
import { Container } from "shared/common/style";
import GridSharedComponent from "shared/grid";
import ImageMainComponent from "./image-main";
import ImagesContentComponent from "./images-content";
import { Body, Head } from "./Images.style";

const ImagesComponent = () => {
  return (
    <>
      <Container>
        <Body>
          <Head>
            <div className="images_main-image">
              <ImageMainComponent />
            </div>
            <ImagesContentComponent />
            {/* <div className="images_ph-images">
              <div>Related Images from Mahdi Alipoor</div>
              <GridSharedComponent />
            </div> */}
          </Head>
        </Body>
      </Container>
    </>
  );
};

export default ImagesComponent;
