import React, { Suspense } from "react";
import HeaderLayout from "layout/basic-layouts";
import dynamic from "next/dynamic";
import { SkeletonLoaderShared } from "shared/loader";

const SearchComponent = dynamic(() => import("components/search"));

const CategoriesDetail = ({ slug }: any) => {
  return (
    <>
      <Suspense fallback={<SkeletonLoaderShared />}>
        <SearchComponent slug={slug} />
      </Suspense>
    </>
  );
};

export async function getServerSideProps({ params }: any) {
  return {
    props: {
      slug: params.id,
    },
  };
}

CategoriesDetail.Layout = HeaderLayout;

export default CategoriesDetail;
