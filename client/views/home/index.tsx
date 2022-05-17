import React, { useEffect, useState } from "react";
import Grid from "components/grid";
import { getImagesService } from "./service";

const HomeView = () => {
  const [images, setImages] = useState([]);
  const [loaded, isLoaded] = useState(false);

  useEffect(() => {
    const getImages = async () => {
      const result = await getImagesService();

      if (!result) {
        return;
      }

      isLoaded(true);
      setImages(result);
    };

    getImages();
  }, []);

  return (
    <>
      <div className="container mt-30">
        <Grid isLoaded={loaded} images={images} />
      </div>
    </>
  );
};

export default HomeView;
