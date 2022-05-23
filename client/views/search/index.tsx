import Grid from "@components/grid";
import { MultiSkeletonLoader } from "@shared/loader";
import React, { useEffect, useState } from "react";
import { getSearchedShots } from "./service";

type Props = {
  slug: string;
};

const SearchView: React.FC<Props> = ({ slug }) => {
  const [shots, setShots] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //
  useEffect(() => {
    const getImages = async () => {
      let tags = [];
      tags.push(slug);

      await getSearchedShots(tags)
        .then((result) => {
          setShots(result);
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });
    };

    getImages();
  }, [slug]);

  return (
    <>
      {isLoading ? (
        <MultiSkeletonLoader />
      ) : (
        <div className="container mt-30 ">
          {shots && shots.length === 0 ? (
            <p>Nothing found</p>
          ) : (
            <Grid images={shots} />
          )}
        </div>
      )}
    </>
  );
};

export default SearchView;
