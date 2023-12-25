import { Spinner } from "flowbite-react";
const Loading = () => {
    return (
        <div className="flex justify-center items-center">
            <Spinner aria-label="Extra large spinner example" size="xl"  className="mt-36"/>
        </div>
    );
};

export default Loading;