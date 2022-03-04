import React from "react";
import Link from "next/link";
import { AlignCenter, Grid } from "shared/common/style";
import Icon from "shared/icons";
import { routes } from "./Header.routes";
import { Menu } from "./Header.style";
import { Theme } from "theme/theme";

const HeaderRight = () => {
  return (
    <Grid align="center" justify="flex-end">
      <Menu>
        {routes.map((route) => (
          <li key={route.id}>
            {route.path === "" ? (
              <a>{route.name}</a>
            ) : (
              <Link href={route.path}>
                <a>{route.name}</a>
              </Link>
            )}
          </li>
        ))}
      </Menu>
      <Link href="/">
        <a>
          <Icon type="logo" color={Theme.colors.main} size={40} />
        </a>
      </Link>
    </Grid>
  );
};

export default HeaderRight;
