import type { AppProps } from "next/app";
import Header from "layout/header";
import NextNProgress from "nextjs-progressbar";
import "styles/style.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress height={3} color="#4338C9" />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
