import { MultiSkeletonLoader } from "@shared/loader";
import { ProfileModel } from "models/profile.model";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import ProfileDetailHero from "./components/hero";

type Props = {
  profile: ProfileModel;
};

const ProfileDetailShots = dynamic(() => import("./components/shots"), {
  suspense: true,
});

const ProfileView: React.FC<Props> = ({ profile }) => {
  console.log(profile);
  return (
    <div className="container mt-30">
      <ProfileDetailHero
        username={profile.username}
        url={profile.profile}
        location={profile.location}
        description={profile.description}
        likes={profile.likes}
        followers={profile.followers}
        followings={profile.followings}
        images={profile.images}
      />

      <Suspense fallback={<MultiSkeletonLoader />}>
        <ProfileDetailShots username={profile.username} />
      </Suspense>
    </div>
  );
};

export default ProfileView;
