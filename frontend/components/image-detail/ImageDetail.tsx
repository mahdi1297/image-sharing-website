import React from "react";
import ImageMainComponent from "./main-image";
import ImagesContentComponent from "./content";
import { Container } from "shared/common/style";
import { Body, Head } from "./ImageDetail.style";

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
          </Head>
        </Body>
      </Container>
    </>
  );
};

export default ImagesComponent;
