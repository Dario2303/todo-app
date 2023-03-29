import React, { useEffect } from 'react'
import Header from './Header/Header'
import Form from './Main/Form'
import { useState } from 'react'


function App () {

  const [ToDoList, setToDoList] = useState([])
  const [registro, setRegistro] = useState('')
  const [completos, setCompletos] = useState([])

  useEffect (() => {
    ToDoList.map((e) => {
      if (e === registro) {
        setCompletos(registro)
      }
    })

    
  }, [registro])

  return (
    <div className="h-screen relative">
      <Header/>
      <Form
        ToDoList = {ToDoList}
        setToDoList = {setToDoList}
        registro = {registro}
        setRegistro = {setRegistro}
      />
    </div>
  )
}

export default App