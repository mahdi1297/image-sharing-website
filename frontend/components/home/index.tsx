import React from "react";
import GridShared from "shared/grid";

type Props = {
  images: object;
};

const HomeComponent: React.FC<Props> = ({ images }) => {
  return (
    <div>
      <GridShared showMeta images={images} />
    </div>
  );
};

export default HomeComponent;
