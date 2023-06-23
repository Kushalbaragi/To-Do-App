import React from 'react'

function EditInput({value}) {
  return (
    <div className='editInput'>
        <input value={value} autoFocus/>
        <div className='action-wrapper'>
            <button>EDIT</button>
            <button>DELETE</button>
        </div>
    </div>
  )
}

export default EditInput