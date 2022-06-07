/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "@shared/button";
import { useForm } from "react-hook-form";
import { Menu, Search, Slack } from "react-feather";
import SearchWrapper from "./components/search";
import { getSearcheItems } from "./service";
import Sidebar from "../sidebar";
import styles from "./style.module.scss";
import { LOGIN, REGISTER, SEARCH_VIA_IMAGES } from "@consts/consts";
import Subment from "./components/submenu";

type Props = {
  userData: any;
  showPanel?: boolean;
};

const Header: React.FC<Props> = ({ userData, showPanel = true }) => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const { data } = userData;

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

  const submitSearchHandler = (dataForm: any) => {
    setSuggests([]);

    if (dataForm.search_input !== "") {
      router.push(`/search/${dataForm.search_input}`);
    }
  };

  const openSidebarHandler = () => {
    setOpenSidebar(true);
  };

  const showSubmenuHandler = () => {
    setShowSubmenu(true);
  };
  const hideSubmenuHandler = () => {
    setShowSubmenu(false);
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
                {data && data.profile ? (
                  <div
                    onMouseEnter={showSubmenuHandler}
                    onMouseLeave={hideSubmenuHandler}
                    className={styles.user__section}
                  >
                    <span>{data && data.username}</span>
                    <img
                      src={`https://${data.profile}`}
                      width="40"
                      className="ml-10"
                      alt=""
                    />
                    {showPanel && showSubmenu && <Subment />}
                  </div>
                ) : (
                  <>
                    <Button
                      buttonType="button"
                      classname="btn-primary-outline btn-md"
                    >
                      <Link href="/auth/register">{REGISTER}</Link>
                    </Button>
                    <Button
                      buttonType="button"
                      classname="btn-primary btn-md ml-15"
                    >
                      <Link href="/auth/login">{LOGIN}</Link>
                    </Button>
                  </>
                )}
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
