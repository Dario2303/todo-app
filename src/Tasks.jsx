import React from 'react'
import Task from './Task'

const Tasks = ({tasks, checking, filter, tasksFilter}) => {
  return ( 
  <>
  {filter ? 
    (
      tasksFilter.map( task => (
        <Task
          task = {task}
          key={task.id}
          checking={checking}
        />
      ))
    ) : (
      tasks.map( task => (
        <Task
          task = {task}
          key={task.id}
          checking={checking}
        />
      ))
    )
  }
    
  </>
  )
}

export default Tasks
