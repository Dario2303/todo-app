import Header from "./Header"
import Form from "./Form"
import { useState } from "react"


function App () {

  const [tasks, setTasks] = useState([])


  return (
    <div className="app" data-theme="light">
      <Header/>
      <Form
        tasks={tasks}
        setTasks={setTasks}
      />
    </div>
  )
}

export default App