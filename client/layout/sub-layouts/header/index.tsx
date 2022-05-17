import React from "react";
import Link from "next/link";
import Button from "@shared/button";
import { Menu, Search, Slack } from "react-feather";
import styles from "./style.module.scss";
import { SEARCH_VIA_IMAGES } from "consts";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <ul className={styles.inner__header}>
          <li className={styles.search__container}>
            <div className={styles.menu__container}>
              <div className={styles.logo}>
                <Link href="/">
                  <a>
                    <Slack />
                  </a>
                </Link>
              </div>
              <div className={styles.search}>
                <button>
                  <Search />
                </button>
                <input placeholder={SEARCH_VIA_IMAGES} />
              </div>
            </div>
          </li>
          <li className={styles.auth__btns}>
            <div>
              <Button
                text="register"
                buttonType="button"
                classname="btn-primary-outline btn-md"
              />
              <Button
                text="Login"
                buttonType="button"
                classname="btn-primary btn-md ml-15"
              />
            </div>
          </li>
          <li className={styles.menu__btn}>
            <Menu />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
