
const Task = ({task, checking}) => {
  

  return (
      <div className='item task'>
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
