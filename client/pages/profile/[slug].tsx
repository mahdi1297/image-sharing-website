import React, { Suspense, useEffect, useState } from "react";
import { MultiSkeletonLoader } from "@shared/loader";
import HomeLayout from "layout/main-layouts/home";
import dynamic from "next/dynamic";
import { ProfileService } from "services/profile.service";
import { GetServerSideProps } from "next";
import { ProfileModel } from "models/profile.model";

type Props = {
  slug: string;
};

const ProfileView = dynamic(() => import("../../views/profile"), {
  suspense: true,
});

const service = new ProfileService();

const PofileDetail: React.FC<Props> = ({ slug }) => {
  const [profile, setProfile] = useState<ProfileModel | any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProfileRequest = async () => {
      await service
        .getProfile(slug)
        .then((data) => {
          //
          if (data && data.result) {
            //
            setProfile(data.result);
            setTimeout(() => {
              setLoading(false);
            }, 700);
          }
        })
        .catch(() => {
          setLoading(false);
        });
    };

    getProfileRequest();
  }, [slug]);

  return (
    <HomeLayout>
      <Suspense fallback={<MultiSkeletonLoader />}>
        {loading ? <MultiSkeletonLoader /> : <ProfileView profile={profile} />}
      </Suspense>
    </HomeLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: any) => {
  if (!params.slug) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      slug: params.slug,
    },
  };
};

export default PofileDetail;
