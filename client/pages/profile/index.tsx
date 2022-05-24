import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Profile = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, [router]);

  return <div>Profile</div>;
};

export default Profile;
