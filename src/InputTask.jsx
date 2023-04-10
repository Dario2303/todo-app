import { useState } from "react"


const InputTask = ({tasks, setTasks}) => {

  const [inputTask, setInputTask] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleClick = () => {
    if ([inputTask].includes('')){
      console.log('no pueden haber valores vacios')
    }else{

      setTasks([...tasks, inputTask])
    }
  }

  return (
    <div>
      <form className='item rounded-lg overflow-hidden' onSubmit={handleSubmit}>
        <div>
          <button onClick={handleClick}>X</button>
        </div>
        <input type="text"
              className='input'
              onChange={e => setInputTask(e.target.value)}
              value={inputTask}
        />
      </form>
    </div>
  )
}

export default InputTask
