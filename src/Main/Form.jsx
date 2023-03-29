import React, { useState } from 'react'
import Listado from '../Tarea/Listado'

const Form = ({ ToDoList, setToDoList, setRegistro, registro }) => {
   

    const [newTodo, setNewTodo] = useState('')

    const add = () => {
        setToDoList([...ToDoList, newTodo])
        setNewTodo('')
    }



  return (
    <div className="max-w-[540px] h-20 z-[1] mt-[-250px] mx-auto border-2 border-black">
        <header className='flex'>
            <h2 className="uppercase block">todo</h2>
            <div className='ml-auto'>
                <img src="../images/icon-sun.svg" alt="sun" />
            </div>
        </header>
            <button onClick={add}>
                <img src="../images/icon-check.svg" alt="check" className="mx-4"/>
            </button>
            <input type="text"
            placeholder='Create a new todo...'
            name="newTodo"
            value={newTodo}
            id="" 
            onChange={e => setNewTodo(e.target.value)}/>
            <ul className='w-full'>
                <Listado
                    ToDoList = {ToDoList}
                    setRegistro = {setRegistro}
                    registro = {registro}
                />
            </ul>
    </div>
  )
}

export default Form
