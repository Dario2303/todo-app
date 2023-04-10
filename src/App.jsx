import Header from "./Header"
import Form from "./Form"
import { useEffect, useState } from "react"


function App () {

  const [tasks, setTasks] = useState([])
  const [checking, setChecking] = useState({})
  const [tasksCheck, setTasksCheck] = useState([])
  const [filter, setFilter] = useState('')
  const [tasksFilter, setTaskFilter] = useState([])
  

  useEffect(()=>{
    const EditCheck = tasks.map(task => task.id === checking.id && !task.check ? checking : task)
    
    console.log(EditCheck)
  },[checking])

  //random ID generate//
  const IDGenerate = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha
  }

  //save new task from input//
  const saveNewTask = (task) => {
    const newTask = {
      task,
      id: IDGenerate(),
      check: false
    }
    setTasks([...tasks, newTask]);
  }


  //filtrando//
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
      setFilter('')
      setTaskFilter([])
    }

}, [filter])


  return (
    <div className="app" data-theme="light">
      <Header/>
      <Form
        tasks = {tasks}
        setTasks= {setTasks}
        setChecking={setChecking}
        filter={filter}
        setFilter={setFilter}
        tasksFilter={tasksFilter}
        saveNewTask={saveNewTask}
      />
    </div>
  )
}

export default App