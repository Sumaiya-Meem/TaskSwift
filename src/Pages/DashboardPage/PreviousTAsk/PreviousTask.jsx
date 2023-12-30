import { useContext, useState } from "react";
import useTask from "../../../Hooks/useTask";
import { AuthContext } from "../../../Context/AuthProvider";
import { Label, Table, TextInput } from 'flowbite-react';
import { IoSearch } from "react-icons/io5";
const PreviousTask = () => {
    const { user } = useContext(AuthContext)
    const [allTask] = useTask();
    
    // console.log(allTask.email)
    const userTasks = allTask.filter(task => task.email === user.email);
    const [searchTask,setSearchTask]=useState('');
    

    const formatTime = (time) => {
        const timeObj = { hour: 'numeric', minute: 'numeric', hour12: true };
        const formattedTime = new Date(`2000-01-01T${time}`).toLocaleTimeString('en-US', timeObj);
        return formattedTime;
    };

    const searchTasks = userTasks.filter((task) => {
        const taskMonth = new Date(task.Date).toLocaleString('en-US', { month: 'long' }).toLowerCase();
    
        return (
            task.title.toLowerCase().includes(searchTask.toLowerCase()) ||
            task.Description.toLowerCase().includes(searchTask.toLowerCase()) ||
            task.Date.includes(searchTask.toLowerCase()) ||
            task.Status.toLowerCase().includes(searchTask.toLowerCase()) ||
            task.Priority.toLowerCase().includes(searchTask.toLowerCase()) ||
            formatTime(task.Time).toLowerCase().includes(searchTask.toLowerCase()) ||
            taskMonth.includes(searchTask.toLowerCase())
        );
    });

    const getStatusColor = (status) => {
        switch (status) {
          case 'ToDo':
            return 'bg-red-100 text-red-500';
          case 'OnGoing':
            return 'bg-cyan-100 text-cyan-500';
          case 'Complete':
            return 'bg-green-100 text-green-500';
          default:
            return 'bg-gray-100 text-gray-500';
        }
      };
      
    
 

    return (
        <div className="">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <h1 className="text-2xl p-3 font-semibold text-[#0085ad] ">Total Task:
                    {userTasks.length < 10 ? `0${userTasks.length} `: userTasks.length}
                </h1>
                <div className="max-w-md mt-4 mr-3">
                    <TextInput type="text" icon={IoSearch} placeholder="Search..." required
                    value={searchTask} 
                    onChange={(e) => setSearchTask(e.target.value)}/>
                </div>
            </div>
            <div>
                <div className="overflow-x-auto mt-3 mx-2">
                    <Table>
                        <Table.Head>
                            <Table.HeadCell className="border">Title</Table.HeadCell>
                            <Table.HeadCell className="border">Details</Table.HeadCell>
                            <Table.HeadCell className="border">Priority</Table.HeadCell>
                            <Table.HeadCell className="border">Status</Table.HeadCell>
                            <Table.HeadCell className="border">DateTime</Table.HeadCell>

                        </Table.Head>
                        <Table.Body className="divide-y">
                            {
                                searchTasks.map((data, index) =>
                                    <Table.Row className="bg-slate-50 capitalize  text-black">

                                        <Table.Cell className="border">{data.title}</Table.Cell>
                                        <Table.Cell className="border">{data.Description}</Table.Cell>
                                        <Table.Cell className="border">{data.Priority}</Table.Cell>
                                        <Table.Cell className="border" >
                                            <span className={`px-2 py-1 ${getStatusColor(data.Status)}`}>
                                               {data.Status}
                                            </span>
                                           </Table.Cell>
                                        <Table.Cell className="border">
                                            <div className="flex flex-col gap-1">
                                                {/* <div className="flex gap-2"> */}
                                                <p className="">{data.Date}</p>
                                                <p className="">{formatTime(data.Time)}</p>
                                                {/* </div> */}
                                            </div>

                                        </Table.Cell>



                                    </Table.Row>
                                )
                            }



                        </Table.Body>
                    </Table>
                </div>

            </div>
        </div>
    );
};

export default PreviousTask;