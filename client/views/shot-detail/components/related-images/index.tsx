import Grid from "@shared/grid";
import { MultiSkeletonLoader } from "@shared/loader";
import React, { useEffect, useState } from "react";
import { getRelatedImages } from "./service";

const ShotDetailRelatedImages = ({ tags }: any) => {
  const [shots, setShots] = useState<any>();
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    const getteRelatedShots = async () => {
      await getRelatedImages(tags)
        .then((result) => {
          setShots(result);
          setIsLoaded(false);
        })
        .catch(() => {
          setIsLoaded(false);
        });
    };

    getteRelatedShots();
  }, [tags]);

  console.log(isLoaded);

  //
  return (
    <div className="container mt-30">
      {isLoaded === true ? (
        <MultiSkeletonLoader />
      ) : (
        <Grid isLoaded={isLoaded} images={shots} />
      )}
    </div>
  );
};

export default ShotDetailRelatedImages;
