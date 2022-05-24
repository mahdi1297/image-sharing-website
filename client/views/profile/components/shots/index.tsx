import Grid from "@shared/grid";
import { MultiSkeletonLoader } from "@shared/loader";
import React, { useEffect, useState } from "react";
import { getUserShots } from "./service";

type Props = {
  username: string;
};

const ProfileDetailShots: React.FC<Props> = ({ username }) => {
  const [shots, setShots] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getShots = async () => {
      //
      await getUserShots(username)
        .then((result) => {
          setShots(result);
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });
    };

    getShots();
  }, [username]);

  return (
    <div>{isLoading ? <MultiSkeletonLoader /> : <Grid images={shots} />}</div>
  );
};

export default ProfileDetailShots;
