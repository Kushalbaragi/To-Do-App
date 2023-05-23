import React from "react";

function List({ tasks, deleteHandler}) {
  console.log(tasks);
  function clickHandler(e){
   tasks.pop();
   console.log(e);
   deleteHandler(tasks);
  }

  let lists=tasks.map((task, index) => {
    return (
        <><li key={index}>{task}</li>
        <button className="edit">EDIT</button>
        <button onClick={clickHandler} className="delete">DELETE</button>
        </>
    );
  })
  return (
    <ul className="taskList">
      {lists}
    </ul>
  );
}

export default List;
