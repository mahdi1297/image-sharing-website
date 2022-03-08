import Header from "layout/header";
import Icon from "shared/icons";
import Link from "next/link";
import { Container } from "shared/common/style";
import { userPanelLayoutRoutes } from "./UserPanelLayout.routes";
import { UserPanelBody } from "./UserPanelLayout.style";

const UserPanelLayout = ({ children }: any) => {
  return (
    <>
      <Header />
      <Container>
        <UserPanelBody>
          <div className="sidebar">
            <h2>Mahdi Alipoor</h2>

            <ul>
              {userPanelLayoutRoutes.map((route) => (
                <li key={route.id}>
                  <Link href={route.path}>
                    <a>
                      <Icon type={route.icon} size={18} />
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
