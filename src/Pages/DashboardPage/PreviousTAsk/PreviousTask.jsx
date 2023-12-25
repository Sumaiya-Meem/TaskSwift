import useTask from "../../../Hooks/useTask";

const PreviousTask = () => {
    const [allTask]=useTask();

    return (
        <div>
           <h1>Total Task: {allTask.length}</h1>
        </div>
    );
};

export default PreviousTask;