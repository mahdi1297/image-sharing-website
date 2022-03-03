import Link from "next/link";
import React from "react";
import { Grid, Justify } from "shared/common/style";
import Icon from "shared/icons";
import { Search } from "./Header.style";

const HeaderLeft = () => {
  return (
    <Justify justify="flex-start">
      <Link href="/">
        <a>
          <Icon type="logo" color="#a65fec" size={40} />
        </a>
      </Link>
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
