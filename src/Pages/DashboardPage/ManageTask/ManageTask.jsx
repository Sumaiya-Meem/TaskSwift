import { Button } from "flowbite-react";
import useTask from "../../../Hooks/useTask";
import { MdDeleteForever } from "react-icons/md";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import { Link } from "react-router-dom";
const ManageTask = () => {
    const [allTask, refetch] = useTask();
    const { user } = useContext(AuthContext)
    const userTasks = allTask.filter(task => task.email === user.email);
    const todoTasks = userTasks.filter(data => data.Status === "ToDo");
    const onGoingTasks = userTasks.filter(data => data.Status === "OnGoing");
    const completeTasks = userTasks.filter(data => data.Status === "Complete");
    const axiosSecure = useAxiosSecure();

    const formatTime = (time) => {
        const timeObj = { hour: 'numeric', minute: 'numeric', hour12: true };
        const formattedTime = new Date(`2000-01-01T${time}`).toLocaleTimeString('en-US', timeObj);
        return formattedTime;
    };

    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/tasks/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Delete successfully.",
                                icon: "success"
                            });
                        }

                    })
                //   refetch()

            }
        });
    }


    return (
        <div>
            <h1 className="text-center text-2xl  p-1 font-semibold text-[#0085ad]">Manage Your Task
            </h1>
            <div className="flex justify-evenly mt-3">
                {/* Todo */}
                <div className="capitalize">
                    <div className="w-56  h-10 bg-gray-400 flex items-center justify-center">
                        <h1 className="text-center">Todo</h1>
                        <div className="ml-2  bg-white w-6 text-center h-6 text-black rounded-full ">
                            <p className="">{todoTasks.length}</p>
                        </div>

                    </div>
                    {
                        todoTasks.map(data =>
                            <div className="my-2 max-w-56 bg-slate-200 p-2 rounded-md shadow-md">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="font-semibold">{data.title}</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <Button onClick={() => handleDelete(data._id)} color=""
                                        ><MdDeleteForever className="text-2xl text-red-600"></MdDeleteForever>
                                        </Button>
                                        <Link to={`/dashboard/detailTask/${data._id}`}>
                                            <Button color="">
                                                <MdOutlineRemoveRedEye className="text-2xl text-green-600"></MdOutlineRemoveRedEye>
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                {/* Todo */}

                {/* Ongoing */}
                <div className="capitalize">
                    <div className="w-56  h-10 bg-gray-400 flex items-center justify-center">
                        <h1 className="text-center">OnGoing</h1>
                        <div className="ml-2  bg-white w-6 text-center h-6 text-black rounded-full ">
                            <p className="">{onGoingTasks.length}</p>
                        </div>

                    </div>
                    {
                        onGoingTasks.map(data =>
                            <div className="my-2 max-w-56 bg-slate-200 p-2 rounded-md shadow-md">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="font-semibold">{data.title}</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <Button onClick={() => handleDelete(data._id)} color=""
                                        ><MdDeleteForever className="text-2xl text-red-600"></MdDeleteForever>
                                        </Button>
                                        <Link to={`/dashboard/detailTask/${data._id}`}>
                                            <Button color="">
                                                <MdOutlineRemoveRedEye className="text-2xl text-green-600"></MdOutlineRemoveRedEye>
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                {/* Complete */}
                <div className="capitalize">
                    <div className="w-56  h-10 bg-gray-400 flex items-center justify-center">
                        <h1 className="text-center">Complete</h1>
                        <div className="ml-2  bg-white w-6 text-center h-6 text-black rounded-full ">
                            <p className="">{completeTasks.length}</p>
                        </div>

                    </div>
                    {
                        completeTasks.map(data =>
                            <div className="my-2 max-w-56 bg-slate-200 p-2 rounded-md shadow-md">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="font-semibold">{data.title}</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <Button onClick={() => handleDelete(data._id)} color=""
                                        ><MdDeleteForever className="text-2xl text-red-600"></MdDeleteForever>
                                        </Button>
                                        <Link to={`/dashboard/detailTask/${data._id}`}>
                                            <Button color="">
                                                <MdOutlineRemoveRedEye className="text-2xl text-green-600"></MdOutlineRemoveRedEye>
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageTask;