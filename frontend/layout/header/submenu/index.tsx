import Link from "next/link";
import React from "react";
import { submenuRoutes } from "../routes";
import { SudMenu } from "./style";

const HeaderSubmenu = () => {
  return (
    <SudMenu>
      <ul>
        {submenuRoutes.map((route) => (
          <li key={route.id}>
            <Link href={route.path}>
              <a>{route.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </SudMenu>
  );
};

export default HeaderSubmenu;
