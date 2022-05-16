import React, { ReactNode } from "react";
import Header from "../../sub-layouts/header";

type Props = {
  children?: ReactNode;
};

const HomeLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};

export default HomeLayout;
