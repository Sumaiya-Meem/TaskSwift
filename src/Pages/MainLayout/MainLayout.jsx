import { Outlet } from "react-router-dom";
import Header from "../HomePage/Header/Header";

const MainLayout = () => {
    return (
        <div className="max-w-screen-lg mx-auto">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;