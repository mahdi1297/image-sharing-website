import React, { useEffect, useState } from "react";
import SearchContent from "./content";
import { getSearchedImages } from "./service";

const SearchComponent = ({ slug }: any) => {
  const [images, setImages] = useState([]);
  const [imagesLength, setImagesLength] = useState(5);

  useEffect(() => {
    const getImages = async () => {
      let tags = [];
      tags.push(slug);

      const result = await getSearchedImages(tags);

      if (!result) {
        setImagesLength(0);
        return;
      }

      setImagesLength(result.length);
      setTimeout(() => {
        setImages(result);
      }, 700);
    };

    getImages();
  }, [slug]);

  return (
    <div>
      <SearchContent images={images} imagesLength={imagesLength}  slug={slug}/>
    </div>
  );
};

export default SearchComponent;
