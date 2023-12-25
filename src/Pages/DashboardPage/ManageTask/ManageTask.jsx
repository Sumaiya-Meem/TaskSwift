import { Button } from "flowbite-react";
import useTask from "../../../Hooks/useTask";

const ManageTask = () => {
    const [allTask] = useTask();
    const todoTasks = allTask.filter(data => data.Status === "To_do");
    const onGoingTasks = allTask.filter(data => data.Status === "On_Going");
    const completeTasks = allTask.filter(data => data.Status === "Complete");



    return (
        <div>
            <h1 className="text-center text-2xl  p-1 font-semibold text-[#0085ad]">Manage Your Task
            </h1>
            <div className="flex justify-evenly mt-3">
                {/* Todo */}
                <div className="">
                    <div className="w-56  h-10 bg-gray-400 flex items-center justify-center">
                        <h1 className="text-center">Todo</h1>
                        <p className="ml-2 bg-white w-5 text-center h-5 text-black rounded-full ">5</p>
                    </div>
                    {
                        todoTasks.map(data => 
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
                {/* Todo */}
                
               {/* Ongoing */}
               <div className="">
                    <div className="w-56  h-10 bg-[#c261a2] flex items-center justify-center">
                        <h1 className="text-center">OnGoing</h1>
                        <p className="ml-2 bg-white w-5 text-center h-5 text-black rounded-full ">5</p>
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
                    <p className="ml-2 bg-white w-5 text-center h-5 text-black rounded-full ">5</p>
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