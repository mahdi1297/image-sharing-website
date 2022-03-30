import NextNProgress from "nextjs-progressbar";
import { Theme } from "theme/theme";
import "styles/style.css";

function MyApp({ Component, pageProps }: any) {
  const Layout = Component.Layout || EmptyLayout;

  return (
    <Layout>
      <NextNProgress height={3} color={Theme.colors.main} />
      <Component {...pageProps} />
    </Layout>
  );
}

const EmptyLayout = ({ children }: any) => <>{children}</>;

export default MyApp;
