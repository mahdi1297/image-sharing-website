import { Suspense, useEffect } from "react";
import dynamic from "next/dynamic";
import { SkeletonLoaderShared } from "shared/loader";
import homeService from "services/homeService";

const HeaderLayout = dynamic(() => import("layout/basic-layouts"), {
  loading: () => <p>Loading...</p>,
});

const HomeComponent = dynamic(() => import("components/home"), {
  ssr: false,
  loading: () => (
    <>
      <SkeletonLoaderShared />
    </>
  ),
});

const Home: any = ({ images }: any) => {
  return (
    <>
      <Suspense fallback={<SkeletonLoaderShared />}>
        <HomeComponent images={images} />
      </Suspense>
    </>
  );
};

export async function getServerSideProps(context: any) {
  try {
    const response: any = await homeService();

    return {
      props: {
        images: response.data.result,
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
}

Home.Layout = HeaderLayout;

export default Home;
