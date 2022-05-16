// import type { NextPage } from "next";
import NextNProgress from "nextjs-progressbar";
import HomeLayout from "../layout/main-layouts/home";

const Home: any = () => {
  return (
    <>
      <NextNProgress height={3} color={"#ccc"} />
      <HomeLayout>{/* <div>Hello Home.js</div> */}</HomeLayout>
    </>
  );
};

Home.Layout = HomeLayout;

export default Home;
