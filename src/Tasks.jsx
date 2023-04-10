import React from 'react'
import Task from './Task'

const Tasks = ({tasks, setChecking, filter, tasksFilter}) => {
  return ( 
  <>
  {filter ? 
    (
      tasksFilter.map( task => (
        <Task
          task = {task}
          key={task.id}
          setChecking={setChecking}
        />
      ))
    ) : (
      tasks.map( task => (
        <Task
          task = {task}
          key={task.id}
          setChecking={setChecking}
        />
      ))
    )
  }
    
  </>
  )
}

export default Tasks
