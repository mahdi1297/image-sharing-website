import React, { useEffect, useState } from "react";
import Grid from "components/grid";
import { getImagesService } from "./service";
import { MultiSkeletonLoader } from "@shared/loader";

const HomeView = () => {
  const [images, setImages] = useState([]);
  const [loaded, setIsLoaded] = useState(true);

  useEffect(() => {
    const getImages = async () => {
      await getImagesService()
        .then((result) => {
          setIsLoaded(false);
          setImages(result);
        })
        .catch(() => {
          setIsLoaded(false);
        });
    };

    getImages();
  }, []);

  return (
    <>
      <div className="container mt-30">
        {loaded ? (
          <MultiSkeletonLoader />
        ) : (
          <Grid isLoaded={loaded} images={images} />
        )}
      </div>
    </>
  );
};

export default HomeView;
