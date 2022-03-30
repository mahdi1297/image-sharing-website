import React from "react";
import ImageMainComponent from "./components/main-image";
import ImagesContentComponent from "./components/content";
import { Container } from "shared/common/style";
import { Body, Head } from "./style";

const ImagesComponent = ({ image }: any) => {
  return (
    <>
      <Container>
        <Body>
          <Head>
            <div className="images_main-image">
              <ImageMainComponent data={image} />
            </div>
            <ImagesContentComponent tags={image.tags} />
          </Head>
        </Body>
      </Container>
    </>
  );
};

export default ImagesComponent;
