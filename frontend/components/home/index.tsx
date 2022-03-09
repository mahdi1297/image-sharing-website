import React from "react";
import GridSharedComponent from "shared/grid";

type Props = {};

const HomeComponent: React.FC<Props> = () => {
  return (
    <div>
      <GridSharedComponent showMeta />
    </div>
  );
};

export default HomeComponent;
