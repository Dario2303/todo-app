import Header from "./Header"
import Form from "./Form"
import { useEffect, useState } from "react"


function App () {

  const [tasks, setTasks] = useState([])
  const [checking, setChecking] = useState({})
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

  useEffect(() => {
    const taskEdit = tasks.map(taskState => taskState.id === checking.id ? checking : taskState)
    setTasks(taskEdit)
  }, [checking])

  return (
    <div className="app" data-theme="light">
      <Header/>
      <Form
        tasks = {tasks}
        setTasks= {setTasks}
        setChecking={setChecking}
        saveNewTask={saveNewTask}
      />
    </div>
  )
}

export default App