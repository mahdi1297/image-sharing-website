import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { SkeletonLoaderShared } from "shared/loader";
import { AlignCenter, Grid, Justify } from "shared/common/style";
import { getSearches } from "./data";
import HeaderSubmenu from "./headerSubmenu";
import { Avatar, Search } from "../style";
import { useForm } from "react-hook-form";
import { userAvatar } from "constaints/data.const";

const HeaderLeft = () => {
  const { register, handleSubmit } = useForm();

  const router = useRouter();

  const [showSubmenu, setShowmenu] = useState<boolean>(false);
  const [suggests, setSuggests] = useState([]);

  useEffect(() => {
    // Empty the suggests after each search submit
    setSuggests([]);
  }, [router.asPath]);

  const showSubmenuHandler = () => {
    setShowmenu(true);
  };
  const hideSubmenuHandler = () => {
    setShowmenu(false);
  };

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
    if (data.search_input !== "") {
      router.push(`/search/${data.search_input}`);
    }
  };

  return (
    <Justify justify="flex-start">
      <Avatar
        onMouseEnter={showSubmenuHandler}
        onMouseLeave={hideSubmenuHandler}
      >
        <AlignCenter>
          <Image src={userAvatar} width={40} height={40} alt="userAvatar" />
        </AlignCenter>
        {showSubmenu && <HeaderSubmenu />}
      </Avatar>

      <Search>
        <form onSubmit={handleSubmit(submitSearchHandler)}>
          <Grid align="center">
            <input
              placeholder="search whatever you want"
              {...register("search_input")}
              onChange={setSearchValueHandler}
              autoComplete="off"
            />
            <button>Search</button>
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
  );
};

export default HeaderLeft;
