import bg from "../../../assets/bg.jpg"
import { Button } from 'flowbite-react';
const Banner = () => {
    return (
        <div className="flex gap-5">
            <div className="flex-1 flex flex-col justify-center">
                <h1 className="text-5xl">Best Way to <br/> Manage Your <br/>Daily Tasks</h1>
                <p className="text-lg mt-3 text-gray-600">
                    Streamline your daily routine with our user-friendly task management solution. Whether it's work projects, personal goals, or important deadlines, our platform helps you stay organized and focused on what matters most.
                </p>
                <Button 
                className="mt-3 w-28">
                Let’s Explore</Button>
            </div>
            <div className="flex-1">
                 <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default Banner;