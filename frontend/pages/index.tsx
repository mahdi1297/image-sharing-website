import type {NextPage} from "next";
import HeaderLayout from "layout/basic-layouts";
import HomeComponent from "../components/home";

const Home: NextPage = () => {
    return <HomeComponent/>;
};

Home.Layout = HeaderLayout;

export default Home;
