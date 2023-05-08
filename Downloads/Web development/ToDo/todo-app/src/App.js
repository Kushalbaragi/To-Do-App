import React, { useState } from "react";
import Form from "./form";
import List from "./List";

function App() {
  const [value, setValue] = useState([]);
  function todoHandler(e) {
    setValue([...value, e]);
    //  console.log(value);
  }

  return (
    <section className="container">
      <div className="todo-wrapper">
        <h1>To Do App</h1>
        <Form todo={todoHandler} />
        <List task='hey' />
      {value.map((task, index)=>{
               <Form todo={todoHandler} />

        {console.log(task);}
      })}
       
      </div>
    </section>
  );
}

export default App;
