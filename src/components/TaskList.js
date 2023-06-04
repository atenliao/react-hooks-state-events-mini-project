import React, { useState } from "react";
import Task from "./Task";


function TaskList({tasks, DeleteTasks}) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {
        tasks.map((element, index) => (
          <Task num={index} key = {index} text ={element.text} category={element.category} deleteFunc={DeleteTasks} />
          // console.log(element.text + ' '+ element.category)
        ))
      }
     
    </div>
  );
}

export default TaskList;
