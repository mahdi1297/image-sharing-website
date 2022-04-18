import React, { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import IconsShared from "shared/icons";
import Modal from "shared/modal";
import { SkeletonLoaderShared } from "shared/loader";
import { AlignCenter, Grid, Justify } from "shared/common/style";
import HeaderSubmenu from "./subMenu";
import { getSearches } from "../../data";
import { Theme } from "theme/theme";
import { AuthBtn, Avatar, Search } from "../../style";
import { userAvatar } from "constaints/data.const";

const AuthComponent = dynamic(() => import("components/auth"), {
  ssr: false,
});

let IS_AUTH = false;

const HeaderLeft = () => {
  const { register, handleSubmit } = useForm();

  const router = useRouter();

  const [showAuthModal, setShowAuthModal] = useState<boolean>(false);
  const [showSubmenu, setShowmenu] = useState<boolean>(false);
  const [suggests, setSuggests] = useState([]);

  useEffect(() => {
    // Empty the suggests after each search submit
    setSuggests([]);
  }, [router.asPath]);

  const setSearchValueHandler = async (e: any) => {
    if (e.target.value === "") {
      setSuggests([]);
    }
    if (e.target.value.split(" ")[0] === "") {
      return;
    }

    let searches = await getSearches(e.target.value.split(" ")[0]);

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

  const showSubmenuHandler = () => {
    setShowmenu(true);
  };
  const hideSubmenuHandler = () => {
    setShowmenu(false);
  };

  const modalIndicatorHandler = () => {
    setShowAuthModal(true);
  };

  const modalCloserHandler = () => {
    setShowAuthModal(false);
  };

  return (
    <>
      <Justify justify="flex-start">
        {IS_AUTH ? (
          <div className="avatar-area">
            <Avatar
              onMouseEnter={showSubmenuHandler}
              onMouseLeave={hideSubmenuHandler}
            >
              <AlignCenter>
                <Image
                  src={userAvatar}
                  width={40}
                  height={40}
                  alt="userAvatar"
                />
              </AlignCenter>
              {showSubmenu && <HeaderSubmenu />}
            </Avatar>
          </div>
        ) : (
          <AuthBtn>
            <button onClick={modalIndicatorHandler}>Login / Register</button>
          </AuthBtn>
        )}
        <Search>
          <form onSubmit={handleSubmit(submitSearchHandler)}>
            <Grid align="center">
              <input
                placeholder="search whatever you want"
                {...register("search_input")}
                onChange={setSearchValueHandler}
                autoComplete="off"
              />
              <button>
                <IconsShared
                  type="search"
                  size={20}
                  color={Theme.colors.black}
                />
              </button>
            </Grid>
          </form>
          <Suspense fallback={<SkeletonLoaderShared />}>
            {suggests && suggests.length !== 0 && (
              <div className="suggest-body">
                <ul>
                  {suggests.map((s: any) => (
                    <li key={s._id}>
                      <Link href={`/search/${s.label}`}>{s.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Suspense>
        </Search>
      </Justify>

      <Modal
        onClose={modalCloserHandler}
        setShow={setShowAuthModal}
        show={showAuthModal}
      >
        <Suspense fallback={<h1>Loading...</h1>}>
          <AuthComponent />
        </Suspense>
      </Modal>
    </>
  );
};

export default HeaderLeft;
