import React from "react";
import ShotDetailHead from "./components/head";
import ShotDetailMain from "./components/main";
import { ShotModel } from "models/shot.model";
import ShotDetailMeta from "./components/meta";
import ShotDetailRelatedImages from "./components/related-images";

type Props = {
  shot: ShotModel;
};

const ShotDetail: React.FC<Props> = ({ shot }) => {
  return (
    <>
      <ShotDetailHead
        username={shot.user.username}
        url={shot.user.profile}
        imagePath={shot.linkes.path}
        imageDownloadLink={shot.linkes.download_link}
      />
      <ShotDetailMain imagePath={shot.linkes.path} />
      <ShotDetailMeta
        title={shot.title}
        city={shot.location.city}
        country={shot.location.country}
        publishedDate={shot.createdAt}
        tags={shot.tags}
      />
      <ShotDetailRelatedImages tags={shot.tags} />
    </>
  );
};

export default ShotDetail;
