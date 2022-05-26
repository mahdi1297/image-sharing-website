import NextNProgress from "nextjs-progressbar";
import "@style/globals.scss";
import Toast from "@shared/toast";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <NextNProgress height={3} color={"#a65fec"} />
      <Component {...pageProps} />
      <Toast />
    </>
  );
}

export default MyApp;
