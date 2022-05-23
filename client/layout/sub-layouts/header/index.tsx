import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "@shared/button";
import styles from "./style.module.scss";
import { useForm } from "react-hook-form";
import { Menu, Search, Slack } from "react-feather";
import SearchWrapper from "./components/search";
import { getSearcheItems } from "./service";
import { SEARCH_VIA_IMAGES } from "consts";
import Sidebar from "../sidebar";

const Header: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const [suggests, setSuggests] = useState([]);
  const [openSidebar, setOpenSidebar] = useState(false);

  const router = useRouter();

  useEffect(() => {
    // Empty the suggests after each search submit
    setSuggests([]);
    setOpenSidebar(false);
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

  const openSidebarHandler = () => {
    setOpenSidebar(true);
  };

  return (
    <>
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
                  {suggests.length !== 0 && (
                    <SearchWrapper searchs={suggests} />
                  )}
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
              <span onClick={openSidebarHandler}>
                <Menu />
              </span>
            </li>
          </ul>
        </div>
      </header>
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
    </>
  );
};

export default Header;
