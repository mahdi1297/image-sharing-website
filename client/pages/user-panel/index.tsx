import React, { Suspense, useContext, useEffect } from "react";
import PanelLayout from "layout/main-layouts/panel-layout";
import dynamic from "next/dynamic";
import { MultiSkeletonLoader } from "@shared/loader";
import UserContextStore from "context/user.context";
import { useRouter } from "next/router";

const UserPanelAccount = dynamic(() => import("views/user-panel/account"), {
  ssr: false,
});

const UserPanel = () => {
  const router = useRouter();
  const userData: any = useContext(UserContextStore);

  useEffect(() => {
    if (!userData.data._id) {
      router.replace("/");
    }
  }, [router, userData.data._id]);

  return (
    <PanelLayout>
      {!userData.data._id ? (
        <h1>Nothing</h1>
      ) : (
        <Suspense fallback={<MultiSkeletonLoader />}>
          <UserPanelAccount userAuthData={userData.data} />
        </Suspense>
      )}
    </PanelLayout>
  );
};

export default UserPanel;
