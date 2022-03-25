import React from "react";
import HeaderLayout from "layout/basic-layouts";
import dynamic from "next/dynamic";
import getImageService from "services/imageDetailService";

const ImagesComponent = dynamic(() => import("components/image-detail"), {
  loading: () => <p>Loading...</p>,
});

const ImageDetailePage = ({ image }: any) => {
  return (
    <div>
      <ImagesComponent image={image} />
    </div>
  );
};

ImageDetailePage.Layout = HeaderLayout;

export async function getServerSideProps({ params }: any) {
  //
  if (!params.id) {
    return {
      notFound: true,
    };
  }

  const response = await getImageService(params.id);

  if (response.status !== 200) {
    return {
      notFound: true,
    };
  }

  //
  return {
    props: {
      image: response.data.result,
    },
  };
}

export default ImageDetailePage;
