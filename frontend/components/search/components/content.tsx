import React from "react";
import GridShared from "shared/grid";
import { SkeletonLoaderShared } from "shared/loader";

type Props = {
  images: string[];
  imagesLength: number;
};

const SearchContent = ({ images, imagesLength }: Props) => {
  return (
    <div>
      {imagesLength !== 0 ? (
        images.length === 0 ? (
          <SkeletonLoaderShared />
        ) : (
          <GridShared showMeta images={images} />
        )
      ) : (
        "No Item here"
      )}
    </div>
  );
};

export default SearchContent;
