
import Header from "./components/header/Header";
// import Button from "./components/header/Button";
import AddTask from "./components/addTask/AddTask";
import { useState } from "react";


function App() {

  const [toggle,setToggle] = useState(true);
  //  console.log(toggle);

  const handleToggle = ()=>{
    setToggle(!toggle)
  }
 

  return (
    <div className="container bg-warning h-100 mt-4 rounded-3 text-center" style={{width:"35%"}}>
          <Header/>
           <button className='btn btn-danger w-25 p-2' onClick={handleToggle}>{toggle ? "Close Add Task Bar" : "Open Add Task Bar"}</button>
         { toggle ? <AddTask/> : <p>No tasks to show!</p>}       
    </div>
  );
}

export default App;
