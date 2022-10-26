
import React, { useEffect } from 'react'
import { BsFillTrashFill } from "react-icons/bs";
import { useState } from 'react';



const Task = ({data, tasks, setTasks }) => {
  const {task, date,completed , id} = data;

  const [done, setDone] = useState(!completed)

  const handleLi = ()=>{
     setDone(!done);
  }

  const handleTrash = (e) =>{
    console.log(e.target)
    const liId = e.target.closest("li").getAttribute("id");
    e.target.remove();

    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i]["id"] === +liId) {
        tasks.splice(i, 1);
      }
    }
     setTasks([...tasks]);
  }
 

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(tasks));
  },[tasks]);


  return (
    <li className="d-flex justify-content-between bg-success mb-3 p-2 align-items-center w-100" id={id}>
      {done ? (
        <div className="fs-4 ms-4 w-75" onClick={handleLi}>
          <p>{task}</p>
          <p>{date}</p>
        </div>
      ) : (
        <div className="fs-4 ms-4 w-75" onClick={handleLi}>
          <p className="text-decoration-line-through">{task}</p>
          <p className="text-decoration-line-through">{date}</p>
        </div>
      )}
      <BsFillTrashFill className="fs-3 me-4" onClick={handleTrash} />
    </li>
  );
}

export default Task;