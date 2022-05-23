import React from "react";
import Link from "next/link";
import styles from "./style.module.scss";

type Props = {
  searchs: [string] | any;
};

const SearchWrapper: React.FC<Props> = ({ searchs }) => {
  console.log(searchs);

  return (
    <div className={styles.search__container}>
      <div>
        <ul className={styles.search__items}>
          {searchs &&
            searchs.map((s: any, l: any) => (
              <li key={s._id} tabIndex={l}>
                <Link href={`/search/${s.label}`}>{s.label}</Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchWrapper;
