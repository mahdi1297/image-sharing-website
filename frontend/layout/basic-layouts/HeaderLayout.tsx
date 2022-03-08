import Header from "layout/header";
import NextNProgress from "nextjs-progressbar";
import { Theme } from "theme/theme";

const HeaderLayout = ({ children }: any) => {
  return (
    <>
      <NextNProgress height={3} color={Theme.colors.main} />
      <Header />
      {children}
    </>
  );
};

export default HeaderLayout;
