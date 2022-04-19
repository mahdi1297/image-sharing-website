import React from "react";
import Link from "next/link";
import Icon from "shared/icons";
import { Grid } from "shared/common/style";
import { Theme } from "theme/theme";
import { routes } from "../routes";
import { Menu } from "../style";

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
