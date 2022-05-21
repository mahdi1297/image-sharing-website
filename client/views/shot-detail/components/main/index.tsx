import React from "react";
import Image from "next/image";
import Button from "@shared/button";
import Tooltip from "@shared/tooltip";
import styles from "./style.module.scss";
import { Heart, Share2, Slash } from "react-feather";

type Props = {
  imagePath: string;
};

const ShotDetailMain: React.FC<Props> = ({ imagePath }) => {
  return (
    <>
      <div>
        <div
          className="mt-10"
          style={{
            width: "100%",
            height: "500px",
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            src={imagePath}
            alt=""
            layout="fill"
            objectFit="contain"
            placeholder="blur"
            blurDataURL={`/images/skeleton-loader.gif`}
          />
        </div>
      </div>

      <div className="container mt-30">
        <div className={`${styles.operator_btns_container} flex`}>
          <Tooltip title="Share">
            <Button classname="btn-link-outline btn-sm">
              <Share2 />
            </Button>
          </Tooltip>
          <Tooltip title="Report">
            <Button classname="btn-danger-outline btn-sm ml-10">
              <Slash />
            </Button>
          </Tooltip>
          <Button classname="btn-link btn-sm ml-10">
            <Heart />
            <span className="ml-5">100</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default ShotDetailMain;
