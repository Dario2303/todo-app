import React from 'react'
import Task from './Task'

const Tasks = ({tasks, setChecking}) => {
  return ( 
    tasks.map( task => (
      <Task
        task = {task}
        key={task.id}
        setChecking={setChecking}
      />
    ))
  )
}

export default Tasks
