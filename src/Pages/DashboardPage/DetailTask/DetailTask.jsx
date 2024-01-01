import { Card } from "flowbite-react";
import { useLoaderData } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
const DetailTask = () => {
    const task = useLoaderData();

    const { title, Description, Priority, Date, Time, Status } = task;
    console.log(task);





    const formatTime = (time) => {
        const validTime = typeof time === 'string' ? time : '';
        const timeObj = { hour: 'numeric', minute: 'numeric', hour12: true };
        const formattedTime = new window.Date(`2000-01-01T${validTime}`).toLocaleTimeString('en-US', timeObj);
        return formattedTime;
    };



    return (
        <div>
            <div className="w-full">
                <Card className="w-[500px]  mx-auto text-black mt-6 ">
                    <div className=" flex justify-end">
                        <FaRegEdit  className="text-xl"/>
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-xl">{title}</h1>
                        <p className="text-gray-600">{Description}</p>
                        <p >
                            <span className="text-base">Deadline: </span>
                            <span className="text-gray-800">{Date} , {formatTime(Time)}</span>
                        </p>
                        <p >
                            <span className="text-base">Priority: </span>
                            <span className="text-gray-600">{Priority}</span></p>
                        <p >
                            <span className="text-base">Status: </span>
                            <span className="text-gray-600">{Status}</span>
                        </p>

                    </div>
                </Card>
            </div>
        </div>
    );
};

export default DetailTask;
