import React from 'react'

const Listado = ({ToDoList, setRegistro}) => {
    
  const completado = () => {
    if (checked) {
      console.log('confirmado')
    }
  }

  return (
    <div>
        <ul>
        {ToDoList.map( (reg) => {
            return(
            <li className='flex bg-white h-9 content-center'>
                <input type="checkbox" checked onClick={completado}></input>
                <div className='w-full'>{reg}</div>
                <button className='ml-auto'>X</button>
            </li>
            )
        })}
        </ul>
    </div>
  )
}

export default Listado
