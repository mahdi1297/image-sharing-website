/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { FOLLOW } from "@consts/consts";
import { MESSAGE } from "@consts/consts";
import Button from "@shared/button";
import React from "react";
import styles from "./style.module.scss";

type Props = {
  username: string;
  url: string;
  likes: number;
  followers: [];
  followings: [];
  description: string;
  location: string;
  images: number;
};

const PROFILE_URL = "http://api.mahdialipoor.ir/public/static/avatar.png";

const ProfileDetailHero: React.FC<Props> = ({
  username,
  url,
  likes,
  followers,
  followings,
  description,
  location,
  images,
}) => {
  return (
    <div className={styles.hero}>
      <div className={styles.avatar}>
        <div>
          <img src={PROFILE_URL} />
        </div>
        <div className="ml-20">
          <ul>
            <li>
              <span>{images}</span>
              <div>Shots</div>
            </li>
            <li>
              <span>{followings.length}</span>
              <div>Following</div>
            </li>
            <li>
              <span>{followers.length}</span>
              <div>Followeres</div>
            </li>
          </ul>
        </div>
      </div>
      <h3 className="mt-30">{username}</h3>
      <div className={styles.description}>
        <p>{description}</p>
        <p className="mt-10">{location}</p>
      </div>

      <section className="mt-30">
        <div className={styles.cta__btns}>
          <Button classname="btn-danger btn-sm mr-10">{MESSAGE}</Button>
          <Button classname="btn-primary btn-sm">{FOLLOW}</Button>
        </div>
      </section>
    </div>
  );
};

export default ProfileDetailHero;
