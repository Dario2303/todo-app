
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
          {total > 1 ? 
          <p before={`${total} items left`} 
              className="before:content-[attr(before)]">
            </p> 
              : 
            <p before={`${total} item left`}
              className="before:content-[attr(before)]">
            </p>}
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
