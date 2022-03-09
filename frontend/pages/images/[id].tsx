import React from "react";
import ImagesComponent from "components/image-detail";
import HeaderLayout from "layout/basic-layouts";

const ImageDetailePage = () => {
  return (
    <div>
      <ImagesComponent />
    </div>
  );
};

ImageDetailePage.Layout = HeaderLayout;

export default ImageDetailePage;
