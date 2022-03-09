import React from "react";
import ImageMainComponent from "./components/main-image";
import ImagesContentComponent from "./components/content";
import { Container } from "shared/common/style";
import { Body, Head } from "./style";

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
