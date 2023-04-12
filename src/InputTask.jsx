import { useState } from "react";


const InputTask = ({saveNewTask}) => {

  const [inputNewTask, setInputNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()

    saveNewTask(inputNewTask)
    setInputNewTask('');

  }


  return (
    <div className="sm:mb-10 mb-7">
      <form className='item rounded-lg overflow-hidden' onSubmit={handleSubmit}>
        <div>
          <button type="submit" className="input-button"></button>
        </div>
        <input type="text"
              className='input'
              placeholder="Create a new todo..."
              onChange={e => setInputNewTask(e.target.value)}
              value={inputNewTask}
              required
        />
      </form>
    </div>
  )
}

export default InputTask
