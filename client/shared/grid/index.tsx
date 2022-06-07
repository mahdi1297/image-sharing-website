/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Avatar from "@shared/avatar";
import styles from "./style.module.scss";
import { Heart, PlusSquare } from "react-feather";
import Tooltip from "@shared/tooltip";

interface ImageProps {
  alt: string;
  downloads: number;
  likes: number;
  title: string;
  user: { username: string; profile: string };
  userId: string;
  _id: string;
  linkes: {
    download_link: string;
    path: string;
  };
}

type Props = {
  isLoaded?: boolean;
  images: ImageProps[] | any;
};

const Grid: React.FC<Props> = ({ images }) => {
  return (
    <div className="masonry">
      {images && images.length === 0
        ? "No shot to indicate!"
        : images.map((m: ImageProps) => (
            <div key={m._id} className={`m-item ${styles.card}`}>
              <Link href={`/shots/${m._id}`}>
                <a>
                  <img
                    src={m.linkes.path}
                    width="100%"
                    height="auto"
                    alt={m.title}
                  />
                </a>
              </Link>
              <div className={styles.card__footer}>
                <Avatar url={m.user.profile} username={m.user.username} />
                <div className={styles.card__meta}>
                  <div>
                    <Tooltip title="Like image">
                      <span>
                        <Heart />
                      </span>
                    </Tooltip>
                  </div>
                  <div className="ml-10">
                    <Tooltip title="Add to colloction">
                      <span>
                        <PlusSquare />
                      </span>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Grid;
