import { useEffect, useState } from "react";
import Toast from "@shared/toast";
import ConnectionStatus from "@components/connection-status";
import { AuthService } from "services/auth.service";
import NextNProgress from "nextjs-progressbar";
import UserContextStore from "context/user.context";
import "@style/globals.scss";

function MyApp({ Component, pageProps }: any) {
  const [authUser, setAuthUser] = useState({});

  useEffect(() => {
    const authenticateUser = async () => {
      const result = await service.getToken();

      if (result.result) {
        setAuthUser(result.result);
      }
    };

    authenticateUser();
  }, []);

  return (
    <>
      <NextNProgress height={3} color={"#a65fec"} />
      <ConnectionStatus />
      <UserContextStore.Provider
        value={{
          data: authUser,
        }}
      >
        <Component {...pageProps} />
      </UserContextStore.Provider>
      <Toast />
    </>
  );
}

const service = new AuthService();

export default MyApp;
