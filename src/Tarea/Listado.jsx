import React from 'react'

const Listado = ({ToDoList, setRegistro, setCompletos, completos}) => {
    
  const tareaCompleta = () => {
    console.log('hola')
  }

  return (
    <div>
        <ul>
        {ToDoList.map( (reg) => {

          return(
            <li className='flex bg-white h-9 content-center'>
                <input type="checkbox" onChange={e => e.target.checked && tareaCompleta()}></input>
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
