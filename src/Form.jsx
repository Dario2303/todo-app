import React from 'react'
import HeaderForm from './HeaderForm'
import InputTask from './InputTask'
import Tasks from './Tasks'
import Filter from './Filter'

const Form = ({saveNewTask,
              tasks,
              setTasks,
              checking,
              setFilter,
              filter,
              tasksFilter,
              deleteTasks,
              deleteSelect,
              screenMode,
              setScreenMode}) => {
  return (
    
    <div className='h-screen w-5/6 max-w-[540px] min-w-[327px] mx-auto mt-[-16rem] sm:mt-[-23rem]'>
        <HeaderForm
        screenMode={screenMode}
        setScreenMode={setScreenMode}
        />
        <InputTask
        saveNewTask={saveNewTask}
        />
        <div className="shadow-lg rounded-lg overflow-hidden mt-4">  

          <Tasks
            tasks={tasks}
            setTasks={setTasks}
            checking={checking}
            filter={filter}
            tasksFilter={tasksFilter}
            deleteSelect={deleteSelect}
          />

          <Filter
            tasks={tasks}
            filter={filter}
            setFilter={setFilter}
            deleteTasks={deleteTasks}
          />
        </div>
        <div className='item sm:hidden flex justify-evenly px-9 rounded-lg mt-7 sm:m-0 shadow-lg'>
          <button onClick={() => setFilter('all')} className={filter === '' ? "select-filter" : "unselected-filtro"}>All</button>
          <button onClick={() => setFilter('active')} className={filter === 'active' ? "select-filter" : "unselected-filtro"}>Active</button>
          <button onClick={() => setFilter('completed')} className={filter === 'completed' ? "select-filter" : "unselected-filtro"}>Completed</button>
        </div>
    </div>
  )
}

export default Form
