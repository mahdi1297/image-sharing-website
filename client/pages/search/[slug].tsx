import HomeLayout from "layout/main-layouts/home";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { MultiSkeletonLoader } from "@shared/loader";

const SearchView = dynamic(() => import("./../../views/search"), {
  suspense: true,
});

const SearchedPage = ({ slug }: any) => {
  return (
    <HomeLayout>
      <Suspense fallback={<MultiSkeletonLoader />}>
        <SearchView slug={slug} />
      </Suspense>
    </HomeLayout>
  );
};

export async function getServerSideProps({ params }: any) {
  return {
    props: {
      slug: params.slug,
    },
  };
}

export default SearchedPage;
