import type { NextPage } from "next";
import HomeComponent from "components/home";
import HeaderLayout from "layout/basic-layouts/HeaderLayout";

const Home: any = () => {
  return <HomeComponent />;
};

Home.Layout = HeaderLayout;

export default Home;
