import { Link } from "react-router-dom";
import bg from "../../../assets/bg.jpg"
import { Button } from 'flowbite-react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
const Banner = () => {
    useEffect(()=>{
        AOS.init({duration:1000})
    })
    return (
        <div className="flex gap-5 flex-col md:flex-row px-2">
            <div className="flex-1 flex flex-col justify-center mt-14 " data-aos="fade-up">
                <h1 className="text-5xl">Best Way to <br/> Manage Your <br/>Daily Tasks</h1>
                <p className="text-lg mt-3 text-gray-600">
                    Streamline your daily routine with our user-friendly task management solution. Whether it's work projects, personal goals, or important deadlines, our platform helps you stay organized and focused on what matters most.
                </p>
                <Link to="dashboard">
                <Button className="mt-3 w-32 bg-[#3cac9f]">
                Let’s Explore</Button></Link>
            </div>
            <div className="flex-1 mt-12" data-aos="fade-down">
                 <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default Banner;