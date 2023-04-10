import React from 'react'
import HeaderForm from './HeaderForm'
import InputTask from './InputTask'
import Tasks from './Tasks'
import Filter from './Filter'

const Form = () => {
  return (
    
    <div className='h-screen w-5/6 max-w-[540px] min-w-[327px] mx-auto mt-[-20rem] sm:mt-[-30rem] pt-12'>
        <HeaderForm/>
        <InputTask/>
        <div className="shadow-lg rounded-lg overflow-hidden mt-4">  
          <Tasks/>
          <Filter/>
        </div>
        <div className='item sm:hidden flex justify-center rounded-lg mt-7 sm:m-0 shadow-lg'>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
    </div>
  )
}

export default Form
