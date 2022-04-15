import React, { Suspense, useState } from "react";
import Image from "next/image";
import HeaderSubmenu from "./headerSubmenu";
import { AlignCenter, Grid, Justify } from "shared/common/style";
import { SkeletonLoaderShared } from "shared/loader";
import { Avatar, Search } from "../style";
import { userAvatar } from "constaints/data.const";

const HeaderLeft = () => {
  const [showSubmenu, setShowmenu] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState("");

  const showSubmenuHandler = () => {
    setShowmenu(true);
  };
  const hideSubmenuHandler = () => {
    setShowmenu(false);
  };

  const setSearchValueHandler = (e: any) => {
    setSearchValue(e.target.value);
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
        <form>
          <Grid align="center">
            <input
              placeholder="search whatever you want"
              onChange={setSearchValueHandler}
            />
          </Grid>
        </form>
        <Suspense fallback={<SkeletonLoaderShared />}></Suspense>
      </Search>
    </Justify>
  );
};

export default HeaderLeft;
