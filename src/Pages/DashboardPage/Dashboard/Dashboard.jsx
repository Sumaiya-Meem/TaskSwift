
import { NavLink, Outlet } from "react-router-dom";
import { MdCreateNewFolder } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa";
import { MdManageHistory } from "react-icons/md";
const Dashboard = () => {
   
    

    return (
        <div className="lg:flex bg-slate-200 ">
            <div className=" h-screen bg-white text-black w-full lg:w-64 m-5 rounded-md">
                <ul >
                    <li className="p-3 border-b-2 border-slate-400 rounded-lg">
                        <NavLink to="/"> <div className="flex items-center gap-1">
                        <FaHome></FaHome> Home Page</div></NavLink>
                    </li>
                    <li className="p-3 border-b-2 border-slate-400 rounded-lg">
                        <NavLink to="/dashboard">
                            <div className="flex items-center gap-1">
                            <FaRegAddressCard></FaRegAddressCard>
                            Create Task
                            </div>
                        </NavLink>
                    </li>
                    <li className="p-3 border-b-2 border-slate-400 rounded-lg">
                        <NavLink to="/dashboard/previousTask">
                            <div className="flex items-center gap-1">
                          <MdCreateNewFolder></MdCreateNewFolder>  Previous Task  </div></NavLink>
                    </li>
                    <li className="p-3 border-b-2 border-slate-400 rounded-lg">
                        <NavLink to="/dashboard/mangeTask">
                            <div className="flex items-center gap-1">
                          <MdManageHistory></MdManageHistory>  Manage Task  </div></NavLink>
                    </li>
                    

                </ul>
            </div>
            {/* content */}
            <div className="flex-1  h-screen bg-white text-black w-full  mt-5 mx-5 rounded-md">
                {/* <h1 className=" text-4xl my-2 p-2">Dashboard</h1> */}
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;