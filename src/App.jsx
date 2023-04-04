import React, { useEffect } from 'react'
import Header from './Header/Header'
import Form from './Main/Form'
import { useState } from 'react'


function App () {

  const [ToDoList, setToDoList] = useState([])
  const [registro, setRegistro] = useState({})
  const [completos, setCompletos] = useState([])

  const guardarTodo = todo => {
    setToDoList(...ToDoList, todo)
  }

  return (
    <div className="h-screen relative">
      <Header/>
      <Form
        ToDoList = {ToDoList}
        setToDoList = {setToDoList}
        registro = {registro}
        setRegistro = {setRegistro}
        setCompletos = {setCompletos}
        completos = {completos}
        guardarTodo = {guardarTodo}
      />
    </div>
  )
}

export default App