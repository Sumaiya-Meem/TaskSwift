import { Button } from "flowbite-react";
import useTask from "../../../Hooks/useTask";
import { TiDeleteOutline } from "react-icons/ti";
import { FaEdit } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
const ManageTask = () => {
    const [allTask, refetch] = useTask();
    const {user} =useContext(AuthContext)
    const userTasks = allTask.filter(task => task.email === user.email);
    const todoTasks = userTasks.filter(data => data.Status === "To_do");
    const onGoingTasks = userTasks.filter(data => data.Status === "On_Going");
    const completeTasks = userTasks.filter(data => data.Status === "Complete");
    const axiosSecure = useAxiosSecure();

    const handleDelete= (id)=>{

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
              .then(res=>{
                if(res.data.deletedCount > 0){
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
                <div className="">
                    <div className="w-56  h-10 bg-gray-400 flex items-center justify-center">
                        <h1 className="text-center">Todo</h1>
                        <p className="ml-2 bg-white w-5 text-center h-5 text-black rounded-full ">{todoTasks.length}</p>
                    </div>
                    {
                        todoTasks.map(data =>
                            <div className="my-2 bg-slate-200 p-2 rounded-md">
                                   <div className="flex gap-5 items-center">
                                   <p>{data.title}</p>
                                    <div className=" ">
                                        <Button onClick={()=>handleDelete(data._id)} color="" 
                                        ><TiDeleteOutline className="text-2xl"></TiDeleteOutline></Button>
                                        
                                    </div>
                                   </div>
                                   
                                <p className="w-52 text-slate-600 my-1">{data.Description}</p>
                                <div className="flex gap-2">
                                    <p><span className="">Deadline:</span> <span className="text-slate-600">{data.Date}</span></p>
                                    <p className="text-slate-600">{data.Time}</p>
                                </div>
                             
                            </div>
                        )
                    }
                </div>
                {/* Todo */}

                {/* Ongoing */}
                <div className="">
                    <div className="w-56  h-10 bg-[#c261a2] flex items-center justify-center">
                        <h1 className="text-center">OnGoing</h1>
                        <p className="ml-2 bg-white w-5 text-center h-5 text-black rounded-full ">{onGoingTasks.length}</p>
                    </div>
                    {
                        onGoingTasks.map(data =>
                            <div className="my-2 bg-slate-200 p-2 rounded-md">
                                <p>{data.title}</p>
                                <p className="w-52 text-slate-600 my-1">{data.Description}</p>
                                <div className="flex gap-2">
                                    <p><span className="">Deadline:</span> <span className="text-slate-600">{data.Date}</span></p>
                                    <p className="text-slate-600">{data.Time}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
                {/* Ongoing */}
                <div className="w-52 h-10 bg-[#48a9c5] flex items-center justify-center">
                    <h1 className="text-center ">Complete</h1>
                    <p className="ml-2 bg-white w-5 text-center h-5 text-black rounded-full ">{completeTasks.length}</p>
                    {
                        completeTasks.map(data =>
                            <div className="my-2 bg-slate-100 p-2">
                                <p>{data.title}</p>
                                <p>{data.Description}</p>
                                <div className="flex gap-2">
                                    <p><span className="font-semibold">Deadline:</span> {data.Date}</p>
                                    <p>{data.Time}</p>
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