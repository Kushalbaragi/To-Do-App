import React, { useState } from "react";

function Form({ todo }) {
  const [value, setValue] = useState('');

  let hadlesubmit = (e) => {
    e.preventDefault();
    todo(value);
    setValue('');
  };
  return (
    <form onSubmit={hadlesubmit}>
      <div className="input-box">
        <input
          type="text"
          value={value}
          placeholder="Enter your task"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        ></input>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

export default Form;
