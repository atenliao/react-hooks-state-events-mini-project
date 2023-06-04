import React, { useState } from "react";


function CategoryFilter({categories, onHandleFilter}) {
  
  const [isChoosed, setisChoosed] = useState('')

 
  function handleClick(event){
     setisChoosed(event.target.value)

     onHandleFilter(event.target.value)
    
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      <div >
      {
        
      categories.map((item, index) => (
        <button key= {index} value={item} onClick={handleClick} className={isChoosed===item?'selected':''}>{item}</button>
      ))
      }
      </div>
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
