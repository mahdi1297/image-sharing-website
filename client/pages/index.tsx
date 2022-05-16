import { Suspense } from "react";
import NextNProgress from "nextjs-progressbar";
import HomeLayout from "../layout/main-layouts/home";
import dynamic from "next/dynamic";

const HomeView = dynamic(() => import("../views/home"), {
  suspense: true,
});

const Home = () => {
  return (
    <>
      <NextNProgress height={3} color={"#ccc"} />
      <HomeLayout>
        <Suspense fallback={<h1>Loading...</h1>}>
          <HomeView />
        </Suspense>
      </HomeLayout>
    </>
  );
};

Home.Layout = HomeLayout;

export default Home;
