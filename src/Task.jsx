import { useState } from "react"
import cross from "../images/icon-cross.svg";

const Task = ({task, checking, deleteSelect}) => {
  
  const [animation, setAnimation] = useState(false)

  //transition to a new task
  setTimeout(() => {
    setAnimation(true)
  }, 5);

  return (
      <div className={`task ${animation && "animation"} relative`}>
        <div>
          <label className="check-style mx-5 cursor-pointer">
            <span className={!task.check ? "check-unabled" : "check-disable"} onClick={() => checking(task)}></span>
        </label>
        </div>
          <div onClick={() => checking(task)} className="w-4/5">{task.check ? <p className="line-through-style block">{task.task}</p> : <p>{task.task}</p>}</div>
          <div className="ml-auto mr-8 cross"><img src={cross} alt="cross" onClick={() => deleteSelect(task)}/></div>
      </div>
  )
}

export default Task
