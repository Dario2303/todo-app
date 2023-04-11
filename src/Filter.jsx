
const Filter = ({tasks, setFilter, deleteTasks}) => {

  
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
          <button onClick={() => deleteTasks()}>Clear Completed</button>
        </div>
      <div className=" hidden sm:block">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>
    </div>
  )
}

export default Filter
