import Link from "next/link";
import React from "react";
import { submenuRoutes } from "../Header.routes";
import { SudMenu } from "../Header.style";

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
