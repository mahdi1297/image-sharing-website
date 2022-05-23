import React, { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@shared/button";
import styles from "./style.module.scss";
import { Menu, Search, Slack } from "react-feather";
import { SEARCH_VIA_IMAGES } from "consts";
import SearchWrapper from "./components/search";
import { getSearcheItems } from "./service";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const [suggests, setSuggests] = useState([]);

  const router = useRouter();

  useEffect(() => {
    // Empty the suggests after each search submit
    setSuggests([]);
  }, [router.asPath]);

  const getSearchValueHandler = async (e: any) => {
    if (e.target.value === "") {
      setSuggests([]);
    }
    if (e.target.value.split(" ")[0] === "") {
      return;
    }

    let searches = await getSearcheItems(e.target.value.split(" ")[0]);

    if (searches) {
      setSuggests(searches.data.result);
    }
  };

  const submitSearchHandler = (data: any) => {
    setSuggests([]);

    if (data.search_input !== "") {
      router.push(`/search/${data.search_input}`);
    }
  };

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
              <form
                className={styles.search}
                onSubmit={handleSubmit(submitSearchHandler)}
              >
                <button type="submit">
                  <Search />
                </button>
                {suggests.length !== 0 && <SearchWrapper searchs={suggests} />}
                <input
                  {...register("search_input")}
                  placeholder={SEARCH_VIA_IMAGES}
                  onChange={getSearchValueHandler}
                />
              </form>
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
