import React from "react";
import { Container } from "shared/common/style";
import Grid from "shared/grid";
import ImageMainComponent from "./components/ImageMain.component";
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
            <div className="images_ph-images">
              <div>Related Images from Mahdi Alipoor</div>
              <Grid />
            </div>
          </Head>
        </Body>
      </Container>
    </>
  );
};

export default ImagesComponent;
