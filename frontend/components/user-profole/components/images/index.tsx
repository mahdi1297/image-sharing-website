import React, { useEffect, useState } from "react";
import { getUserProfile } from "services/profileService";
import GridShared from "shared/grid";
import { SkeletonLoaderShared } from "shared/loader";

const ProfileImages = ({ slug }: any) => {
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(5);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getImages = async () => {
      setIsLoading(true);
      await getUserProfile(slug)
        .then((data) => {
          setImages(data.result);
          setCount(data.count);
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
        })
        .catch((err) => {
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
        });
    };

    getImages();
  }, [slug]);

  return (
    <div>
      {isLoading ? (
        <SkeletonLoaderShared />
      ) : count === 0 ? (
        "No Item Here"
      ) : (
        <GridShared showMeta images={images} />
      )}
    </div>
  );
};

export default ProfileImages;
