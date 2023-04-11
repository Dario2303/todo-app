import Header from "./Header"
import Form from "./Form"
import { useEffect, useState } from "react"
import Modal from "./Modal"


function App () {

  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('')
  const [tasksFilter, setTaskFilter] = useState([])
  const [deleteModal, setDeleteModal] = useState(false)
  
  //filter
  useEffect(()=> {

    if(filter ==='active'){
      const activeFilter = tasks.filter(task => task.check===false)
      setTaskFilter(activeFilter)    
    }
    if(filter === 'completed'){
      const completedFilter = tasks.filter(task => task.check)
      setTaskFilter(completedFilter)
    }
    if(filter === 'all'){
      setTaskFilter([])
      setFilter('')
    }
  }, [tasks, filter])


  //random ID generate//
  const IDGenerate = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha
  }

  //save new task from input
  const saveNewTask = (task) => {
    const newTask = {
      task,
      id: IDGenerate(),
      check: false
    }
    setTasks([...tasks, newTask]);
  }

  //checked action
  const checking = checked => {
    const checkTask = {
      task:checked.task,
      id:checked.id,
      check:!checked.check
    }
    const updateTasks = tasks.map(check => check.id === checked.id ? checkTask : check)
    setTasks(updateTasks)
  }

  //delete tasks
  const deleteTasks = () => {
    setDeleteModal(true)
  }



  return (
    <div className="app" data-theme="light">
      {deleteModal && <Modal deleteTasks={deleteTasks}/>}
      <Header/>
      <Form
        checking={checking}
        tasks = {tasks}
        setTasks= {setTasks}
        filter={filter}
        setFilter={setFilter}
        tasksFilter={tasksFilter}
        saveNewTask={saveNewTask}
        deleteTasks={deleteTasks}
      />
    </div>
  )
}

export default App