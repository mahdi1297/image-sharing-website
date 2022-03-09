import React, { useState } from "react";
import Image from "next/image";
import { AlignCenter, Justify } from "shared/common/style";
import { Avatar } from "../style";
import HeaderSubmenu from "./HeaderSubmenu";
import { userAvatar } from "constaints/Data.const";

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

      {/* <Search>
        <form>
          <Grid align="center">
            <input placeholder="search whatever you want" />
          </Grid>
        </form>
      </Search> */}
    </Justify>
  );
};

export default HeaderLeft;
