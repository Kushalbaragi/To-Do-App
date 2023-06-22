import React, { useState } from "react";
import InputField from "./inputField";
import { v4 as uuid } from "uuid";
import Task from './task';

function Home() {
  let [taskList, setTaskList] = useState([]);
  function inputHandler(text) {
    console.log(text);
    let task = { id: uuid().slice(0, 8), task: text };
    setTaskList([...taskList,task]);
  }
  function editHandler(id){
    console.log(id);
   let index=taskList.findIndex(ele=>ele.id===id);
   let temp=[...taskList];
   temp[index].task='helllo';
   setTaskList(temp);
   
  }
  function deleteHandler(id){
    setTaskList(taskList.filter(ele=>ele.id!==id));
  }
  return (
    <div className="todo-wrapper">
      <div className="todo-container">
        <h2>Get Things Done</h2>
        <InputField inputHandler={inputHandler} />
        <Task taskList={taskList} editHandler={editHandler} deleteHandler={deleteHandler}/>
      </div>
    </div>
  );
}

export default Home;
