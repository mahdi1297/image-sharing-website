import dynamic from "next/dynamic";
import { useState } from "react";
import homeService from "services/homeService";
import Modal from "shared/modal";

const HeaderLayout = dynamic(() => import("layout/basic-layouts"), {
  loading: () => <p>Loading...</p>,
});

const HomeComponent = dynamic(() => import("components/home"), {
  loading: () => <p>Loading...</p>,
});

const Home: any = ({ images }: any) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
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
