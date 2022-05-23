import React, { ReactNode } from "react";
import Header from "../../sub-layouts/header";

type Props = {
  children?: ReactNode;
};

const HomeLayout: React.FC<Props> = ({ children }) => {
  return (
    <div style={{ paddingTop: "60px" }}>
      <Header />

      <div>{children}</div>
    </div>
  );
};

export default HomeLayout;
