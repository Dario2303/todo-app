import React from 'react'
import HeaderForm from './HeaderForm'
import InputTask from './InputTask'
import Tasks from './Tasks'
import Filter from './Filter'

const Form = ({saveNewTask, tasks, setTasks, setChecking, setFilter, filter, tasksFilter}) => {
  return (
    
    <div className='h-screen w-5/6 max-w-[540px] min-w-[327px] mx-auto mt-[-20rem] sm:mt-[-30rem] pt-12'>
        <HeaderForm/>
        <InputTask
        saveNewTask={saveNewTask}
        />
        <div className="shadow-lg rounded-lg overflow-hidden mt-4">  

          <Tasks
            tasks={tasks}
            setTasks={setTasks}
            setChecking={setChecking}
            filter={filter}
            tasksFilter={tasksFilter}
          />

          <Filter
            tasks={tasks}
            setFilter={setFilter}
          />
        </div>
        <div className='item sm:hidden flex justify-center rounded-lg mt-7 sm:m-0 shadow-lg'>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
    </div>
  )
}

export default Form
