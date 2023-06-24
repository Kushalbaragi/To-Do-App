import React,{useContext, useState}from 'react'
import InputField from './inputField'
import EditInput from './editInput';

function Task({taskList,editHandler,deleteHandler}) {
  let [show,setShow]=useState(false);

  function clickHandler(text,id){
    console.log(text);
    console.log(id);

    // ()=>editHandler(task.id);

  }


  if(taskList.length>0){
  return <div className='taskList'>
    {taskList.map(task=>{
      return <><div className='taskBlock' key={task.id}>
         <span>{task.task}</span>
         <span onClick={()=>setShow(!show)}>EDIT</span>
         <span onClick={()=>deleteHandler(task.id)}>DELETE</span>
      </div>
      {show && <EditInput/>}</>
    })}
  </div>
  }
  else return <div>No task added</div>
}


export default Task