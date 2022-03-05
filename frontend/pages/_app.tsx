import type { AppProps } from "next/app";
import Header from "layout/header";
import NextNProgress from "nextjs-progressbar";
import "styles/style.css";
import { Theme } from "theme/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress height={3} color={Theme.colors.main} />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
