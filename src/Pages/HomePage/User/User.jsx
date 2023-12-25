import { Card } from "flowbite-react";
import useUser from "../../../Hooks/useUser";

const User = () => {
    const [allUser]=useUser()
    return (
        <div className="mt-10">
            <h1 className="text-center text-2xl text-[#45ad9d] mb-4 font-semibold">Our Happy User</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
               {
                allUser.map(data=>
                   <Card>
                       <img src={data.image} alt="" className="w-full h-[200px] rounded-lg" />
                       <h1 className="text-center">{data.name}</h1>
                       <h1  className="text-center">{data.profession}</h1>
                   </Card> 
                    )
               }
            </div>
        </div>
    );
};

export default User;