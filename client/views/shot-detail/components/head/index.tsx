import React, { useState } from "react";
import Avatar from "@shared/avatar";
import Button from "@shared/button";
import styles from "./style.module.scss";
import { Download, Heart, PlusSquare, ZoomIn } from "react-feather";
import { DOWNLOAD_SHOT } from "@consts/consts";
import Tooltip from "@shared/tooltip";
import Modal from "@shared/modal";
import ViewShotWindow from "./zoom-modal";

interface Props {
  username: string;
  url: string;
  imagePath: string;
  imageDownloadLink: string;
}

const ShotDetailHead: React.FC<Props> = ({
  username,
  url,
  imagePath,
  imageDownloadLink,
}) => {
  const [isZoomView, setIsZoomView] = useState(false);

  const openZoomViewModal = () => {
    setIsZoomView(true);
  };

  const closeZoomViewModal = () => {
    setIsZoomView(false);
  };

  return (
    <>
      <div className="container mt-30">
        <div className={styles.head}>
          <div className={styles.center}>
            <div className="mr-20">
              <Avatar username={username} url={url} />
            </div>
          </div>
          <div className={styles.center}>
            <Tooltip title="Zoom in">
              <Button
                classname="btn btn-link-outline btn-sm"
                onclick={openZoomViewModal}
              >
                <ZoomIn />
              </Button>
            </Tooltip>
            <Tooltip title="Like shot">
              <Button classname="btn btn-link-outline ml-5 btn-sm">
                <Heart />
              </Button>
            </Tooltip>
            <Tooltip title="Add to colloction">
              <Button classname="btn btn-link-outline ml-5 btn-sm">
                <PlusSquare />
              </Button>
            </Tooltip>
            <a href={imageDownloadLink}>
              <Button
                classname={`btn btn-primary btn-sm ml-15 ${styles.hide_in_sm}`}
              >
                <Download className="mr-5" />
                <span>{DOWNLOAD_SHOT}</span>
              </Button>
            </a>
          </div>
        </div>

        <Modal onClose={closeZoomViewModal} show={isZoomView} size={"90%"}>
          <ViewShotWindow path={imagePath} />
        </Modal>
      </div>
    </>
  );
};

export default ShotDetailHead;
