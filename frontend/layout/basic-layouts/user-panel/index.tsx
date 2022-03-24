import Header from "layout/header";
import Navigator from "layout/navigator";
import Icon from "shared/icons";
import Link from "next/link";
import { Container } from "shared/common/style";
import { userPanelLayoutRoutes } from "./routes";
import { UserPanelBody } from "./style";
import { useRouter } from "next/router";
import Avatar from "shared/avatar";

const UserPanelLayout = ({ children }: any) => {
  const router = useRouter();

  return (
    <>
      <Header />
      <Navigator />
      <Container>
        <UserPanelBody>
          <div className="sidebar">
            <h1>Your Panel</h1>
            <div className="avatar">
              <Avatar id="0" width="40px" radius="5px" />
            </div>
            <ul>
              {userPanelLayoutRoutes.map((route) => (
                <li key={route.id}>
                  <Link href={route.path}>
                    <a
                      className={router.pathname === route.path ? "active" : ""}
                    >
                      <Icon type={route.icon} size={14} />
                      <span>{route.title}</span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <main>{children}</main>
        </UserPanelBody>
      </Container>
    </>
  );
};

export default UserPanelLayout;
