import React from "react";
import UserProfile from "components/user-profole";
import HeaderLayout from "layout/basic-layouts";

const ProfileDetailPage = ({ slug }: any) => {
  return (
    <div>
      <UserProfile slug={slug} />
    </div>
  );
};

export async function getServerSideProps({ params }: any) {
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
}

ProfileDetailPage.Layout = HeaderLayout;

export default ProfileDetailPage;
