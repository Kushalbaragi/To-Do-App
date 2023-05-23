import React, { useState } from "react";

function Form({ todo }) {
  const [value, setValue] = useState('');

  let hadlesubmit = (e) => {
    e.preventDefault();
    todo(value);
    setValue('');
  };

  function changeHandler(event){
    setValue(event.target.value);
  }
  return (
    <form onSubmit={hadlesubmit}>
      <div className="input-box">
        <input type="text" value={value} onChange={changeHandler}/>
      
        <button className="add">Add</button>
      </div>
    </form>
  );
}

export default Form;
