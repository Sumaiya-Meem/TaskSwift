import { useLoaderData } from "react-router-dom";

const DetailTask = () => {
    const task =useLoaderData()
    console.log(task)
    return (
        <div>
            <h1>Details</h1>
        </div>
    );
};

export default DetailTask;