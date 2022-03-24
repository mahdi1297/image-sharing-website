import React from "react";
import HeaderLayout from "layout/basic-layouts";
import dynamic from "next/dynamic";

const ImagesComponent = dynamic(() => import("components/image-detail"), {
  loading: () => <p>Loading...</p>,
});

const ImageDetailePage = () => {
  return (
    <div>
      <ImagesComponent />
    </div>
  );
};

ImageDetailePage.Layout = HeaderLayout;

export default ImageDetailePage;
