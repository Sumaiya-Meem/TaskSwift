import { Button, Card, FileInput, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { IoMdPerson } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsPersonRolodex } from "react-icons/bs";
import { MdCloudUpload } from "react-icons/md";
const editProfile = () => {

    const userData = useLoaderData()
    // console.log(data)
    const { name, email, profession, image } = userData;
    return (
        <div>

            <div className='px-4 mt-5'>
                <Card className="max-w-screen-xl">
                    <div>
                        <h1 className="text-2xl  font-semibold text-[#0085ad] ">My Profile</h1>
                    </div>
                    <div className="h-1 border-t border-gray-300 border-dashed my-2"></div>

                    <div className='flex gap-5'>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <IoMdPerson /> <Label value="Your Name" className='' />
                            </div>
                            <TextInput value={name} type="text" placeholder="" required />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <MdOutlineMailOutline /> <Label value="Email" className='' />
                            </div>
                            <TextInput value={email} type="email" disabled placeholder="" required />
                        </div>
                    </div>
                    <div className="max-w-md">
                        <div className="flex items-center gap-2 mb-1">
                            <BsPersonRolodex /> <Label value="Profession" className='' />
                        </div>
                        <TextInput value={profession} type="email" placeholder="" required />
                    </div>
                    <div className="w-56  space-y-1">
                        <div className='flex  items-center'>
                            <div>
                            <MdCloudUpload className='mr-2'></MdCloudUpload>  
                            </div>
                        <h1 className='font-semibold'>Upoload Image</h1>
                        </div>
                        <img src={image} alt="" className="rounded-[50%] w-32 h-32" />
                         <FileInput id="file" />
                         
                    </div>
                    <div className='flex justify-end -mt-12'>
                         <Button className='btn '>Save changes</Button>
                    </div>
                    
                </Card>
            </div>
        </div>
    );
};

export default editProfile;