import NextNProgress from "nextjs-progressbar";
import "@style/globals.scss";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <NextNProgress height={3} color={"#a65fec"} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
