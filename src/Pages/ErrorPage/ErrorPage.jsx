import Lottie from 'lottie-react';
import errorPageAnimation from "../../../public/Animation - 1701617232458.json"
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div className=' flex justify-center items-center flex-col gap-6'>
         <Lottie animationData={errorPageAnimation}></Lottie>
         <Link to="/"> <Button>Go Home</Button></Link>
         
        </div>
    );
};

export default ErrorPage;