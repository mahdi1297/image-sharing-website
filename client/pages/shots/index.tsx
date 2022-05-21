import React, { useEffect } from "react";
import { useRouter } from "next/router";

// This page will be empty
// And just navigates to home page

const Shots = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, [router]);

  return <div></div>;
};

export default Shots;
