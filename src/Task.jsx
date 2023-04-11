import { useState } from "react"

const Task = ({task, checking}) => {
  
  const [animation, setAnimation] = useState(false)
  const [animationLine, setAnimationLine] = useState(false)
  let clase = ''

  setTimeout(() => {
    setAnimation(true)
  }, 5);


  return (
      <div className={`task ${animation && "animation"} relative`}>
        <div>
        <label htmlFor="">  
          <input type="checkbox"
                  className="check" checked={task.check}
                  onChange={() => checking(task)}
            />
            <span>!!</span>
        </label>
          
        </div>
          {task.check ? <p className="line-through-style">{task.task}</p> : <p>{task.task}</p>}
      </div>
  )
}

export default Task
