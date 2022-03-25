import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AlignCenter, Justify } from "shared/common/style";
import ButtonComponent from "shared/button";
import AvatarComponent from "shared/avatar";
import Icon from "shared/icons";
import GridShared from "shared/grid";
import { Theme } from "theme/theme";
import ImageMetaComponent from "./images-meta";
import { ADD_TO_COLLOCTION } from "constaints/errors.const";
import { getRelatedImages } from "./service";

const ImageMainComponent = ({ data }: any) => {
  const { tags } = data;

  const [relatedImages, setRelatedImages] = useState([]);
  const [imagesCount, setImagesCount] = useState(3);

  useEffect(() => {
    const getRelatedImage = async () => {
      const result = await getRelatedImages(tags);
      setImagesCount(result.length);
      setRelatedImages(result);
    };
    getRelatedImage();
  }, [tags]);
  //

  console.log(relatedImages);

  return (
    <>
      <section>
        <AlignCenter>
          <AvatarComponent id="10" username={data.user.username} />

          <ButtonComponent color="gray" size="md">
            <Icon type="heart" size={14} color={Theme.colors.gray} />
            <span>Like</span>
          </ButtonComponent>

          <ButtonComponent color="gray" size="md">
            <Icon type="colloction" size={14} color={Theme.colors.gray} />
            <span>{ADD_TO_COLLOCTION}</span>
          </ButtonComponent>
        </AlignCenter>
      </section>

      <div className="main-image-container">
        <Justify>
          <div
            style={{
              width: "100%",
              height: "600px",
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              src={data.linkes.path}
              alt=""
              layout="fill"
              objectFit="contain"
              placeholder="blur"
              blurDataURL={`/images/skeleton-loader.gif`}
            />
          </div>
        </Justify>
        <ImageMetaComponent
          tags={data.tags}
          title={data.title}
          creationDate={data.createdAt}
          location={data.location}
          likes={data.likes}
        />
      </div>

      {relatedImages.length !== 0 &&
        (imagesCount === 0 ? (
          "No Image To Show Here"
        ) : (
          <GridShared showMeta images={relatedImages} />
        ))}
    </>
  );
};

export default ImageMainComponent;
