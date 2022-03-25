import dynamic from "next/dynamic";
import homeService from "services/homeService";

const HeaderLayout = dynamic(() => import("layout/basic-layouts"), {
  loading: () => <p>Loading...</p>,
});

const HomeComponent = dynamic(() => import("components/home"), {
  loading: () => <p>Loading...</p>,
});

const Home: any = ({ images }: any) => {
  return <HomeComponent images={images} />;
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
