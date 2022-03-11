// import type { NextPage } from "next";
import dynamic from "next/dynamic";

const HeaderLayout = dynamic(() => import("layout/basic-layouts"), {
  loading: () => <p>Loading...</p>,
});

const HomeComponent = dynamic(() => import("components/home"), {
  loading: () => <p>Loading...</p>,
});

const Home: any = () => {
  return <HomeComponent />;
};

Home.Layout = HeaderLayout;

export default Home;
