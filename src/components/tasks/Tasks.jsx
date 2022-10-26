
import React, { useEffect } from 'react'
import Task from './Task'



const Tasks = (props) => {
   const {tasks, setTasks} = props;   
   
   useEffect(() => {
     localStorage.setItem("data", JSON.stringify(tasks));

     return () => {};
   }, [tasks]);

  return (
    <div className="container tasks-div p-3 mb-5">
      <ul className='w-100'>
        {tasks.map((item)=>{
          // console.log(item);
          return (
            <Task key={item.id} data={item} tasks={tasks} setTasks={setTasks}/>
          )
        })}
    </ul>
    </div>
  )
}

export default Tasks