import dynamic from "next/dynamic";
import { Suspense, useState } from "react";
import homeService from "services/homeService";
import { SkeletonLoaderShared } from "shared/loader";
import Modal from "shared/modal";

const HeaderLayout = dynamic(() => import("layout/basic-layouts"), {
  loading: () => <p>Loading...</p>,
});

// const HomeComponent = dynamic(() => import("components/home"), {
//   loading: () => <p>Loading...</p>,
// });

const HomeComponent = dynamic(() => import("components/home"), {
  ssr: false,
  loading: () => (
    <>
      <SkeletonLoaderShared />
    </>
  ),
});

const Home: any = ({ images }: any) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <img src="https://imagepicker.s3.ir-thr-at1.arvanstorage.com/justin-yeung-DQVizJTIKxM-unspl ash.jpg" />
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      <Modal onClose={() => setShowModal(false)} show={showModal}>
        Hello from the modal!
      </Modal>
      <HomeComponent images={images} />
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
