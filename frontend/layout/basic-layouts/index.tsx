import Header from "layout/header";
import Navigator from "layout/navigator";
import NextNProgress from "nextjs-progressbar";
import { Theme } from "theme/theme";

const HeaderLayout = ({ children }: any) => {
  return (
    <>
      <NextNProgress height={3} color={Theme.colors.main} />
      <Header />
      <div style={{ marginTop: "120px", paddingBottom: "60px" }}>
        {children}
      </div>
      <Navigator />
    </>
  );
};

export default HeaderLayout;
