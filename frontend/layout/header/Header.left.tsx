import React, { useState } from "react";
import Image from "next/image";
import { AlignCenter, Grid, Justify } from "shared/common/style";
import { Search, Avatar } from "./Header.style";
import { userAvatar } from "constaints/Data.const";
import HeaderSubmenu from "./Header.submenu";

const HeaderLeft = () => {
  const [showSubmenu, setShowmenu] = useState<boolean>(false);

  const showSubmenuHandler = () => {
    setShowmenu(true);
  };
  const hideSubmenuHandler = () => {
    setShowmenu(false);
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
            <input placeholder="search whatever you want" />
          </Grid>
        </form>
      </Search>
    </Justify>
  );
};

export default HeaderLeft;
