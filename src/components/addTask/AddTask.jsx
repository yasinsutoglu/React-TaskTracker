
import React from 'react'
import { useState } from 'react';
import Tasks from '../tasks/Tasks';


const AddTask = () => {

  const [taskInput , setTaskInput] = useState("");
  const [dateInput, setDateInput] = useState("");

 const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("data"))|| [])
 

   const handleSaveTask = (e) => {  
     e.preventDefault();

    if (document.querySelector("#task").value !== "" && document.querySelector("#date").value !== ""){

       const newTask = {
        id: new Date().getTime(),
        task: taskInput,
        date: dateInput,
        completed: false,
      }

    

    setTasks([...tasks,newTask]);
   
    setTaskInput("")
    setDateInput("")
    }else{
      alert("please fill the blanks")
    }
   }
   
  

  return (
    <div>
      <form
        className="container form-control my-4 p-3"
        onSubmit={(e) =>  handleSaveTask(e)}>
        <div className="mt-2">
          <label htmlFor="task">Task: </label> <br />
          <input
            type="text"
            id="task"
            name="task"
            placeholder="Add Task"
            className="form-control p-2 mt-2"
            value={taskInput}
            onChange={(e)=> setTaskInput(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="date">Day & Time: </label> <br />
          <input
            type="text"
            id="date"
            name="date"
            placeholder="Add Date and Time"
            className="form-control p-2 mt-2"
            value={dateInput}
            onChange={(e)=> setDateInput(e.target.value)}
          />
        </div>

        <div className="mt-4 text-center">
          <button type="submit" className="btn btn-info form-control w-50 p-2">
            Save Task
          </button>
        </div>
      </form>

     <Tasks tasks={tasks} setTasks={setTasks}/> 
    </div>
  );
}

export default AddTask;