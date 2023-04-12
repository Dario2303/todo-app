import React from 'react'
import Task from './Task'

const Tasks = ({tasks, checking, filter, tasksFilter, deleteSelect}) => {
  return ( 
  <>
  {filter ? 
    (
      tasksFilter.map( task => (
        <Task
          task = {task}
          key={task.id}
          checking={checking}
          deleteSelect={deleteSelect}
        />
      ))
    ) : (
      tasks.map( task => (
        <Task
          task = {task}
          key={task.id}
          checking={checking}
          deleteSelect={deleteSelect}
        />
      ))
    )
  }
    
  </>
  )
}

export default Tasks
