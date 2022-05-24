/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

type Props = {
  username: string;
  url: string;
};

const Avatar: React.FC<Props> = ({ username, url }) => {
  const IMAGE_URL = "http://api.mahdialipoor.ir/public/static/avatar.png";

  return (
    <>
      {url && (
        <div>
          <div className={styles.avatar__container}>
            <section className={styles.avatar}>
              <Link href={`/profile/${username}`}>
                <a>
                  <img
                    src={IMAGE_URL}
                    width="32"
                    className={styles.avatar__img}
                  />
                </a>
              </Link>
            </section>
            <span className="ml-10">
              <Link href={`/profile/${username}`}>
                <a>{username}</a>
              </Link>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Avatar;
