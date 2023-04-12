import { useEffect, useState } from "react"

const Task = ({task, checking}) => {
  
  const [animation, setAnimation] = useState(false)
  const [checkStyle, setCheckStyle] = useState(false)

  //transition to a new task
  setTimeout(() => {
    setAnimation(true)
  }, 5);

  //style config for check
  // useEffect (() => {
  //     if(task.check) {
  //       setCheckStyle(true)
  //       console.log(checkStyle)
  //       return;
  //     }else{
  //       setCheckStyle(false)
  //     }

  // }, [task])

  return (
      <div className={`task ${animation && "animation"} relative`} onClick={() => checking(task)}>
        <div>
          <label className="check-style mx-5 cursor-pointer">
            <span className={!task.check ? "check-unabled" : "check-disable"} onClick={() => checking(task)}></span>
        </label>
          
        </div>
          {task.check ? <p className="line-through-style">{task.task}</p> : <p>{task.task}</p>}
      </div>
  )
}

export default Task
