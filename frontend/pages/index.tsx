import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Home page</h1>
      <button onClick={() => router.push("/apps")}>Go to about me</button>
    </div>
  );
};

export default Home;
