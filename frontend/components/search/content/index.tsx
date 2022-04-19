import React from "react";
import { Container } from "shared/common/style";
import GridShared from "shared/grid";
import { SkeletonLoaderShared } from "shared/loader";
import { Theme } from "theme/theme";

type Props = {
  images: string[];
  imagesLength: number;
  slug: string;
};

const SearchContent = ({ images, imagesLength, slug }: Props) => {
  return (
    <div>
      {imagesLength !== 0 ? (
        images.length === 0 ? (
          <>
            <SkeletonLoaderShared />
          </>
        ) : (
          <>
            <Container>
              <br />
              <h2>
                Search result for{" "}
                <span style={{ color: Theme.colors.main }}>{slug}</span>
              </h2>
            </Container>
            <GridShared showMeta images={images} />
          </>
        )
      ) : (
        "No Item here"
      )}
    </div>
  );
};

export default SearchContent;
