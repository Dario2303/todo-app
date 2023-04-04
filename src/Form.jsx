import React from 'react'
import HeaderForm from './HeaderForm'
import InputTask from './InputTask'

const Form = () => {
  return (
    <div className='h-screen w-5/6 max-w-[540px] min-w-[327px] mx-auto mt-[-20rem] sm:mt-[-30rem] pt-12'>
        <HeaderForm/>
        <InputTask/>
    </div>
  )
}

export default Form
