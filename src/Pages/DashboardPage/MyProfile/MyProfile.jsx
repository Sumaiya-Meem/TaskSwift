import { Card } from 'flowbite-react';
import { RiEditBoxLine } from "react-icons/ri";
import useUser from '../../../Hooks/useUser';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { Link } from 'react-router-dom';
const MyProfile = () => {

    const [allUser] = useUser();
    const { user } = useContext(AuthContext)
    const loggedInUser = allUser.filter(data => data.email === user.email);
    console.log(loggedInUser)


    return (
        <div>

            <div className='px-4 mt-5'>
                <Card href="#" className="max-w-screen-xl">
                    <div className='flex items-center justify-between'>
                        <div>
                            <h1 className="text-2xl  font-semibold text-[#0085ad] ">My Profile</h1>
                        </div>
                        <div>
                            {loggedInUser.map((data) =>
                                <Link to={`/dashboard/editProfile/${data._id}`}>
                                    <RiEditBoxLine className='text-xl text-[#46899e]'></RiEditBoxLine>
                                </Link>
                            )}

                        </div>
                    </div>
                    <div className="h-1 border-t border-gray-300 border-dashed my-2"></div>

                    {loggedInUser.map((data) =>
                        <>
                            <h2>Full Name</h2>
                            <h3 className='font-semibold'>{data.name}</h3>
                            <h2>Email</h2>
                            <h4 className='font-semibold'>{data.email}</h4>
                            <h2>Profession</h2>
                            <h4 className='font-semibold'>{data.profession}</h4>
                        </>
                    )}

                </Card>
            </div>
        </div>
    );
};

export default MyProfile;