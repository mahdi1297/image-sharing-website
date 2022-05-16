import React from "react";
import styles from "./style.module.scss";
import { Menu, Search } from "react-feather";

const Header: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <ul className={styles.inner__header}>
            <li>
              <div className={styles.menu__container}>
                <button>
                  <Search />
                </button>
                <input />
              </div>
            </li>
            <li>
              <div className={styles.logo__wraper}>
                <Menu />
              </div>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
