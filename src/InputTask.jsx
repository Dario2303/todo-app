import { useState } from "react";


const InputTask = ({saveNewTask}) => {

  const [inputNewTask, setInputNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()

    if ([inputNewTask].includes('')){
      console.log('no pueden haber valores vacios')
    }else{
      saveNewTask(inputNewTask)
      setInputNewTask('');
    }
  }


  return (
    <div>
      <form className='item rounded-lg overflow-hidden' onSubmit={handleSubmit}>
        <div>
          <button type="submit" className="check">X</button>
        </div>
        <input type="text"
              className='input'
              onChange={e => setInputNewTask(e.target.value)}
              value={inputNewTask}
              required
        />
      </form>
    </div>
  )
}

export default InputTask
