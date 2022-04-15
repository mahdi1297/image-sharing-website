import React from "react";
import GridShared from "shared/grid";

type Props = {
  images: object;
};

const HomeComponent: React.FC<Props> = ({ images }: any) => {
    return (
    <div>
      {images.length === 0 ? (
        "Still no image"
      ) : (
        <GridShared showMeta images={images} />
      )}
    </div>
  );
};

export default HomeComponent;
