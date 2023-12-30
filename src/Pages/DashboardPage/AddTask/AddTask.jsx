import { Button, Card, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import './AddTask.css'
import { useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../../Context/AuthProvider';
import Swal from 'sweetalert2';
const AddTask = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure=useAxiosSecure()

    const navigate=useNavigate()

    const handleAddTask=(e)=>{

        e.preventDefault();

        const form = e.target;
        const title= form.title.value || "Not-Given"
        const Description= form.Description.value || "Not-Given"
        const Priority= form.Priority.value || "Not-Given"
        const Date= form.Date.value || "Not-Given"
        const Time= form.Time.value || "Not-Given"
        const Status= "ToDo" || "Not-Given"
        const email= user.email || "Not-Given"

        const taskInfo ={
            title,Description,Priority,Date,Time,Status,email
        }
        console.log("Email",user.email)
        axiosSecure.post('/tasks',taskInfo)
        .then(res=>{
            if(res.data.insertedId){
                Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: "Task add successfully",
                  showConfirmButton: false,
                  timer: 1500
                });
            }
        })
        form.reset();
        
    }
    return (
        <div className='px-4 mt-4'>
            <h1 className='text-4xl text-[#0085ad]'>Create New Task</h1>
            <div className='mt-5'>
              <form onSubmit={handleAddTask}>
              <Card>
                   <input type="text" placeholder='Title' name="title" className='input' />
                   <input type="text" placeholder='Description' name="Description" className='input' />
                   <input type="text" placeholder='Priority' name="Priority" className='input' />
                   <input type="date" placeholder='Date' name="Date" className='input' />
                   <input type="time" placeholder='Time' name="Time" className='input' />
                   <Button className="mt-3 w-32 bg-[#0079c1] " type="submit">
                 <span className='text-lg'>Create</span></Button>
                </Card>
              </form>
            </div>
        </div>
    );
};

export default AddTask;