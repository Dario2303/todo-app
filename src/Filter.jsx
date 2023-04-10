import React from 'react'

const Filter = ({tasks}) => {
  return (
    <div className='filter-grid item'>
        <div>
          <p>{tasks.length} items left</p>
        </div>
        <div>
          <button>Clear Completed</button>
        </div>
      <div className=" hidden sm:block">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  )
}

export default Filter
