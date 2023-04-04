import React, { useState } from 'react'



const InputTask = () => {

    const [task, setTask] = useState([])

  return (
    <div className="mt-8 item">
      <div className="px-4">
        <div className='uncheck'>
          <input type="checkbox" />
        </div>
      </div>
      <input type="text"
            onChange={e => setTask(e.target.value)}
            value={task}/>
    </div>
  )
}

export default InputTask
