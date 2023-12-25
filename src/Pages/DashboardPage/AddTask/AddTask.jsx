import { Button, Card, Label, TextInput } from 'flowbite-react';
import React from 'react';
import './AddTask.css'
const AddTask = () => {
    return (
        <div className='px-4 mt-4'>
            <h1 className='text-4xl text-[#0085ad]'>Create New Task</h1>
            <div className='mt-5'>
                <Card>
                   <input type="text" placeholder='Title' name="title" className='input' />
                   <input type="text" placeholder='Description' name="Description" className='input' />
                   <input type="text" placeholder='Priority' name="Priority" className='input' />
                   <input type="date" placeholder='Deadline' name="dueDate" className='input' />
                   <Button className="mt-3 w-32 bg-[#0079c1] ">
                 <span className='text-lg'>Create</span></Button>
                </Card>
            </div>
        </div>
    );
};

export default AddTask;