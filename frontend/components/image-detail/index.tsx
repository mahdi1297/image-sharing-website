import React, { useEffect } from "react";
import ImageMainComponent from "./main-image";
import ImagesContentComponent from "./content";
import { Container } from "shared/common/style";
import { Body, Head } from "./style";

const ImagesComponent = ({ image }: any) => {
  // const router = useRouter();

  //   router.push("/search", undefined, { shallow: true });
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
