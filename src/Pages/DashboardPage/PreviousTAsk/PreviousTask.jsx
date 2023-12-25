import { useContext } from "react";
import useTask from "../../../Hooks/useTask";
import { AuthContext } from "../../../Context/AuthProvider";
import { Table } from 'flowbite-react';
const PreviousTask = () => {
    const { user } = useContext(AuthContext)
    const [allTask] = useTask();
    // console.log(allTask.email)
    const userTasks = allTask.filter(task => task.email === user.email);

    return (
        <div className="">
            <h1 className="text-2xl p-3 font-semibold text-[#0085ad]">Total Task: {userTasks.length}</h1>
            <div>
                <div className="overflow-x-auto">
                    <Table>
                        <Table.Head>
                            <Table.HeadCell>Title</Table.HeadCell>
                            <Table.HeadCell>Details</Table.HeadCell>
                            <Table.HeadCell>Priority</Table.HeadCell>
                            <Table.HeadCell>Status</Table.HeadCell>
                            <Table.HeadCell>DateTime</Table.HeadCell>
                            
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {
                               userTasks.map((data,index)=>
                               <Table.Row className="bg-slate-50 ">
                               
                               <Table.Cell>{data.title}</Table.Cell>
                               <Table.Cell>{data.Description}</Table.Cell>
                               <Table.Cell>{data.Priority}</Table.Cell>
                               <Table.Cell>{data.Status}</Table.Cell>
                               <Table.Cell>
                                <div className="flex flex-col gap-1">
                                <p>{data.Date}</p>
                                <p>{data.Time}</p>
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