import React from "react";
import Link from "next/link";
import Button from "@shared/button";
import { X } from "react-feather";
import styles from "./style.module.scss";

type Props = {
  openSidebar: boolean;
  setOpenSidebar: Function;
};

const Sidebar: React.FC<Props> = ({ openSidebar, setOpenSidebar }) => {
  const closeSidebarHandler = () => {
    setOpenSidebar(false);
  };

  return (
    <>
      <div
        className={`${openSidebar ? styles.page__wrapper : ""}`}
        onClick={closeSidebarHandler}
      ></div>
      <div className={`${styles.sidebar} ${openSidebar ? styles.active : ""}`}>
        <div className={styles.sidebar__container}>
          <div className={styles.sidebar__closer}>
            <span onClick={closeSidebarHandler}>
              <X />
            </span>
          </div>

          <div className={styles.sidebar__auth}>
            <Button classname="btn-primary">
              <Link href="/">Login</Link>
            </Button>
            <Button classname="btn-primary-outline ml-10">
              <Link href="/">Register</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
