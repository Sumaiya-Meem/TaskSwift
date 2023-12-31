import { Button, Card, Checkbox, FileInput, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Swal from 'sweetalert2';
import regiAnimation from "../../../public/Animation - 1701619162523.json"
import Lottie from 'lottie-react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

// const image_hosting_key=import.meta.env.VITE_IMAGE_HOSTING_KEY;
// const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const Register = () => {

  const axiosSecure = useAxiosSecure()
  const {register,handleSubmit,reset,formState: { errors }} = useForm()

  const {createUser,updateUserProfile,logOut } =useContext(AuthContext);
  const navigate=useNavigate()

  const onSubmit = async (data) => {
    console.log(data)

    // const imageFile={image:data.image[0]}
    // const imageRes= await axiosSecure.post(image_hosting_api,imageFile,{
    //   headers:{
    //     'content-type':'multipart/form-data'
    //   }
    // })
    // console.log(imageRes.data)

    createUser(data.email,data.password)
    .then(userRes=>{
      const loggedUser = userRes.user;
      console.log(loggedUser)

      updateUserProfile(data.name,data.image)
      .then(()=>{
        console.log("user profile updated successfully")
        // create user in database
        const userInfo={
          name:data.name,
          email:data.email,
          profession:data.profession,
          image:data.image
          // image:res.data.data.display_url
        }
     
       axiosSecure.post('/users',userInfo)
        .then(userAddRes=>{
          if(userAddRes.data.insertedId){
            console.log("user add in database")
            reset();
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Register Successfully",
              showConfirmButton: false,
              timer: 1500
            });
            logOut().then(() => {
              console.log("User logged out")
              navigate("/login");
            });
          }
        })
      }) 
      })
      // .catch(err=>console.log(err))

  
    
  }

  return (
        <div className='flex gap-4'>
            
    <div className='flex-1'>
    <Card className="max-w-lg">
        <h1 className='mt-10 text-center text-3xl text-[#3cac9f] font-semibold'>Register here</h1>
      <form className="flex flex-col gap-4 mt-4 text-left" onSubmit={handleSubmit(onSubmit)}>
      <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your Name" />
          </div>
          <TextInput id="email1" {...register("name",{ required: true })} type="text" placeholder="name" />
          {errors.name?.type === "required" && (
        <p className='text-red-700'>Name is required</p>
      )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput id="email1" type="email"   {...register("email",{ required: true })}  placeholder="name@gmail.com" />
          {errors.email?.type === "required" && (
        <p className='text-red-700'>Email is required</p>
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="PhotoURL" />
          </div>
          <TextInput id=""  {...register("image",
         { required: true})}  type="text" placeholder="" />
          
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Profession" />
          </div>
          <TextInput id=""  {...register("profession",
         { required: true})}  type="text" placeholder="" />
          
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput  {...register("password",
         { required: true,
          minLength:5, 
          maxLength: 20,
          pattern: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/,
        })}
        type="password" />

          {errors.password?.type === "pattern" && (
        <p className='text-red-600'>Password must have At least one uppercase character,Minimum six characters
         and At least one special character</p>
        )}

        </div>
         {/* <div>
       <Label htmlFor="password1" value="Choose Image" />
        <div className='w-56'>
                <FileInput id="file" {...register('image',{ required: true })}/>
         </div>
        </div> */}
        <input type="submit" value="Register"  className='btn bg-[#3cac9f] font-semibold w-[30%] mx-auto p-2 rounded-lg text-white'/> 

        <p>Have an account? <Link to="/login">
         <span className='text-blue-500'>Login </span>here
        </Link></p>
      </form>
    </Card>
    </div>
    <div className='hidden lg:block w-[40%] flex-1 mt-12'>
        <Lottie animationData={regiAnimation}></Lottie>
    </div>

        </div>
    );
};

export default Register;