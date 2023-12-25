import { Button } from 'flowbite-react';
import aboutImg from '../../../../public/about.avif'
import { Link } from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
const About = () => {
    useEffect(()=>{
        AOS.init({duration:2000})
    })
    return (
        <div className='flex flex-col md:flex-row gap-2'>
            <img src={aboutImg} alt="" className='h-[550px]' data-aos="fade-up" />
            <div className='mt-36 text-lg' data-aos="fade-down" >
                <p>

                    Welcome to TaskSwift your go-to solution for seamless task management.
                    We understand the challenges of staying organized in a fast-paced world.
                    TaskSwift simplifies your life with an intuitive platform designed for individuals and teams. 
                    Our mission is to empower you with effective and user-friendly tools, making task management a breeze. Join us on this journey, and let's elevate your productivity together.
                </p>
                <Link to="dashboard">
                <Button className="mt-3 w-32 bg-[#39ada0]">
                Let’s Explore</Button></Link>
            </div>
        </div>
    );
};

export default About;