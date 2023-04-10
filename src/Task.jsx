import React, { useEffect, useState } from 'react'

const Task = ({task, setChecking}) => {

  const [Completed, setCompleted] = useState('')
  
  useEffect(() => {
    if(Completed){
      const checking = {
            task:task.task,
            id:task.id,
            check:Completed
      }
      setChecking(checking)
    }  
    },[Completed])
  // useEffect(() => {
  //   if(Completed){
  //     const check = {
  //       task:task.task,
  //       id:task.id,
  //       check:true
  //     }
  //     setChecking(check)
  //     return;
  //   }else {
  //       const check = {
  //       task:task.task,
  //       id:task.id,
  //       check:false
  //     }
  //     setChecking(check)
  //   }
  // },[Completed])

  return (
      <div className='item task'>
        <div>
          <input type="checkbox"
                className="check"
                onChange={e => setCompleted(e.target.checked)}
          />
        </div>
          {task.check ? <p className="line-through">{task.task}</p> : <p>{task.task}</p>}
      </div>
  )
}

export default Task
