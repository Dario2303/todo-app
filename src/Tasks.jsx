import React from 'react'
import Task from './Task'

const Tasks = ({tasks, setTasks}) => {
  return (
    <div>
      <Task
        tasks={tasks}
        setTasks={setTasks}
      />
    </div>
  )
}

export default Tasks
