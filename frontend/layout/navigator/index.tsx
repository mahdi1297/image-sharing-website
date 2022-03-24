import React from "react";
import Link from "next/link";
import Icon from "shared/icons";
import { routes } from "./routes";
import { Body } from "./style";
import { userAvatar } from "constaints/data.const";

const Navigator = () => {
  return (
    <Body>
      <ul>
        {routes.map((rt) => (
          <li key={rt.id}>
            <Link href={rt.path}>
              <a>
                <Icon type={rt.icon} size={30} color={rt.color} />
              </a>
            </Link>
          </li>
        ))}
        <li>
          <Link href="/user-panel">
            <a>
              <img src={userAvatar} width="35" height="35" />
            </a>
          </Link>
        </li>
      </ul>
    </Body>
  );
};

export default Navigator;
