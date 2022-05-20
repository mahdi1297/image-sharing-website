import dynamic from "next/dynamic";
import HomeLayout from "layout/main-layouts/home";
import { Suspense } from "react";

const ShotDetail = dynamic(() => import("./../../views/shot-detail"), {
  suspense: true,
});

const Detail = () => {
  return (
    <>
      <HomeLayout>
        <Suspense fallback={<h1>Loading...</h1>}>
          <ShotDetail />
        </Suspense>
      </HomeLayout>
    </>
  );
};

// export async function getStaticPaths(){

// }

// export async function getStaticProps(){

// }

Detail.layout = HomeLayout;

export default Detail;
