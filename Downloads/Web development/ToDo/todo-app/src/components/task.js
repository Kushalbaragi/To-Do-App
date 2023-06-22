import React from 'react'
import InputField from './inputField'

function Task({taskList,editHandler,deleteHandler}) {
  if(taskList.length>0){
  return <div className='taskList'>
    {taskList.map(task=>{
      return <div className='taskBlock' key={task.id}>
         <span>{task.task}</span>
         <span onClick={()=>editHandler(task.id)}>EDIT</span>
         <InputField/>
         <span onClick={()=>deleteHandler(task.id)}>DELETE</span>
      </div>
    })}
  </div>
  }
  else return <div>No task added</div>
}


export default Task