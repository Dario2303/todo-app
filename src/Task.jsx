import { useState } from "react"

const Task = ({task, checking}) => {
  
  const [animation, setAnimation] = useState(false)

  setTimeout(() => {
    setAnimation(true)
  }, 5);

  return (
      <div className={`task ${animation && "animation"}`}>
        <div>
        <input type="checkbox"
                className="check" checked={task.check}
                onChange={() => checking(task)}
          /> 
          
        </div>
          {task.check ? <p className="line-through">{task.task}</p> : <p>{task.task}</p>}
      </div>
  )
}

export default Task
