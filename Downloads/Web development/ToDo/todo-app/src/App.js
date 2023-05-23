import React, { useState } from "react";
import Form from "./form";
import List from "./List";

function App() {
  const [value, setValue] = useState([]);

  function todoHandler(inputValue) {
    setValue([...value, inputValue]);
  }

  function deleteHandler(updatedValues){
    setValue([...updatedValues]);
  }

  return (
    <section className="container">
      <div className="todo-wrapper">
        <h1>To Do App</h1>
        <Form todo={todoHandler} />
        <List tasks={value} deleteHandler={deleteHandler}/>
      </div>
    </section>
  );
}

export default App;
