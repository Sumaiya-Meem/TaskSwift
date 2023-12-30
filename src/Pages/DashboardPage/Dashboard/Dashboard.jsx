
import { NavLink, Outlet } from "react-router-dom";
import { MdCreateNewFolder } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa";
import { MdManageHistory } from "react-icons/md";
import img from "../../../../public/bg1.avif"
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import { Button } from "flowbite-react";

const Dashboard = () => {

    

    const {user,logOut}=useContext(AuthContext)

    const handleLogout =()=>{
        console.log("logout")
        logOut()
        .then(()=>{})
        .catch(err=>console.log(err))
    }

    return (
        <div className="lg:flex bg-slate-200" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className="max-h-screen bg-slate-200 text-black w-full lg:w-64 m-5 rounded-md">
                <div className="mt-3 space-y-2">
                    <div className="flex justify-center relative">
                        <div className="w-4 h-4 -mr-12  -mt-1 absolute rounded-[50%] bg-green-500"></div>
                        <img src={user?.photoURL} alt="" className="rounded-[50%] w-32 h-32" />
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="font-semibold">{user?.displayName}</h3>
                        <p className="text-slate-500">{user?.email}</p>
                    </div>
                </div>
                <div className="h-1 border-t border-gray-400 border-dashed my-2"></div>
                <ul >

                    <li className="p-3 border-b-2 border-slate-400 rounded-lg">
                        <NavLink to="/dashboard">
                            <div className="flex items-center gap-1">
                                <CgProfile />
                                My Profile
                            </div>
                        </NavLink>
                    </li>

                    <li className="p-3 border-b-2 border-slate-400 rounded-lg">
                        <NavLink to="/dashboard/createTask">
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
                    <li className="p-3 border-b-2 border-slate-400 rounded-lg">
                        <NavLink to="/"> <div className="flex items-center gap-1">
                            <FaHome></FaHome> Home Page</div></NavLink>
                    </li>
                    <li className="p-3 border-b-2 border-slate-400 rounded-lg">
                    <NavLink to="" onClick={handleLogout}>
                            <div className="flex items-center gap-1">
                                <IoIosLogOut></IoIosLogOut> LogOut </div></NavLink>
                    </li>


                </ul>
            </div>
            {/* content */}
            <div className="flex-1  h-screen bg-slate-200 text-black w-full  mt-5  mr-5 rounded-md">
                {/* <h1 className=" text-4xl my-2 p-2">Dashboard</h1> */}
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;