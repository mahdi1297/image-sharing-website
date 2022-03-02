import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress height={3} color="#4338C9" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
