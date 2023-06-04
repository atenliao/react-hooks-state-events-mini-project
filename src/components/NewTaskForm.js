import React, { useState } from "react";

function NewTaskForm({onTaskFormSubmit}) {
  const [Detail, setDetail] = useState('')
  const [getCategory, setgetCategory] = useState('Code')
  
  function handleTask(event){
    setDetail(event.target.value)
  }
  function handleChange(event){
    setgetCategory(event.target.value)
  }
  function handleSubmit(event){
    event.preventDefault()
    const formData = {text: Detail, category: getCategory}
    onTaskFormSubmit(formData)
    setDetail('')
    setgetCategory('Code')
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleTask}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange}>
          {/* render <option> elements for each category here */}
          <option value='Code'>Code</option>
          <option value='Food'>Food</option>
          <option value='Money'>Money</option>
          <option value='Misc'>Misc</option>
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
