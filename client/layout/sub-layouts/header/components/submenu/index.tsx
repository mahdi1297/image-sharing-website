import Link from "next/link";
import React from "react";
import { LogOut, User } from "react-feather";
import styles from "./style.module.scss";

const Subment = () => {
  return (
    <div className={styles.submenu}>
      <ul>
        <li>
          <Link href="/user-panel">
            <a>
              <User />
              <span>Profile</span>
            </a>
          </Link>
        </li>
        <li>
          <a>
            <LogOut />
            <span>Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Subment;
