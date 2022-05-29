import React from "react";
import Link from "next/link";
import HomeLayout from "../home";
import styles from "./style.module.scss";
import { routes } from "./routes";
import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
};

const PanelLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter();

  return (
    <HomeLayout showPanel={false}>
      <div className="container mt-30">
        <div className={styles.panel__container}>
          <section className={styles.panel__sidebar}>
            <ul>
              {routes.map((rt) => (
                <li key={rt.id}>
                  <Link href={rt.path}>
                    <a className={router.pathname === rt.path ? styles.active : ""}>
                      <>
                        {rt.icon}
                        {rt.title}
                      </>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <main>{children}</main>
        </div>
      </div>
    </HomeLayout>
  );
};

export default PanelLayout;
