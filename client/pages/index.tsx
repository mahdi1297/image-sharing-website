import { Suspense } from "react";
import HomeLayout from "../layout/main-layouts/home";
import dynamic from "next/dynamic";
import { MultiSkeletonLoader } from "@shared/loader";

const HomeView = dynamic(() => import("../views/home"), {
  suspense: true,
});

const Home = () => {
  return (
    <>
      <HomeLayout>
        <Suspense fallback={<MultiSkeletonLoader />}>
          <HomeView />
        </Suspense>
      </HomeLayout>
    </>
  );
};

Home.Layout = HomeLayout;

export default Home;
