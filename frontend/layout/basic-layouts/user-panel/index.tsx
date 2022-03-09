import Header from "layout/header";
import Navigator from "layout/navigator";
import Icon from "shared/icons";
import Link from "next/link";
import { Container } from "shared/common/style";
import { userPanelLayoutRoutes } from "./routes";
import { UserPanelBody } from "./style";
import { useRouter } from "next/router";

const UserPanelLayout = ({ children }: any) => {
  const router = useRouter();

  return (
    <>
      <Header />
      <Navigator />
      <Container style={{ marginTop: "100px" }}>
        <UserPanelBody>
          <div className="sidebar">
            <h2>Mahdi Alipoor</h2>

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
