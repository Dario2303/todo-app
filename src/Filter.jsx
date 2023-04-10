import { useEffect, useState } from "react";

const Filter = ({tasks, setFilter}) => {

  
  let total = 0;

  tasks.map(e => {
    if(!e.check) {
      total+=1
    }
  })

  return (
    <div className='filter-grid item'>
        <div>
          {total > 1 ? <p>{total} items left</p> : <p>{total} item left</p>}
        </div>
        <div>
          <button>Clear Completed</button>
        </div>
      <div className=" hidden sm:block">
        <button onClick={e => setFilter('all')}>All</button>
        <button onClick={e => setFilter('active')}>Active</button>
        <button onClick={e => setFilter('completed')}>Completed</button>
      </div>
    </div>
  )
}

export default Filter
