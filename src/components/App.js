import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });


function App() {
  const [itemArray, setItemArray] = useState([...TASKS])
  function FilteredArray(value){
    setItemArray([...TASKS].filter((item)=>{
      if(value === 'All') return true
      return item.category === value
    }))
    
  }

  function DeleteTasks(index){ 
    setItemArray([...itemArray.slice(0,index), ...itemArray.slice(index+1)])
  }

  function onTaskFormSubmit(obj){
    setItemArray([...itemArray, obj])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories = {CATEGORIES} onHandleFilter={FilteredArray}/>
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={itemArray} DeleteTasks={DeleteTasks}/>
    </div>
  );
}

export default App;
