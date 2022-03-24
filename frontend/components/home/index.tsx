import React from "react";
import GridSharedComponent from "shared/grid";

type Props = {
  images: any;
};

const HomeComponent: React.FC<Props> = ({ images }) => {
  return (
    <div>
      <GridSharedComponent showMeta images={images} />
    </div>
  );
};

export default HomeComponent;
