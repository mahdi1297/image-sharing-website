import UserContextStore from "context/user.context";
import React, { ReactNode, useContext } from "react";
import Header from "../../sub-layouts/header";

type Props = {
  children?: ReactNode;
  showPanel?: boolean;
};

const HomeLayout: React.FC<Props> = ({ children, showPanel }) => {
  const userData = useContext(UserContextStore);

  return (
    <div style={{ paddingTop: "60px" }}>
      <Header userData={userData} showPanel={showPanel} />

      <div>{children}</div>
    </div>
  );
};

export default HomeLayout;
