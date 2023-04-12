
const Filter = ({tasks, setFilter, deleteTasks, filter}) => {

  let total = 0;

  tasks.map(e => {
    if(!e.check) {
      total+=1
    }
  })

  return (
    <div className='filter-grid item px-[3%]'>
        <div className="counter">
          {total > 1 ? 
          <p before={`${total} items left`} 
              className="before:content-[attr(before)]">
            </p> 
              : 
            <p before={`${total} item left`}
              className="before:content-[attr(before)]">
            </p>}
        </div>
        <div className="text-right">
          <button onClick={() => deleteTasks()} className="clear">Clear Completed</button>
        </div>
      <div className=" hidden sm:flex sm:justify-evenly mx-8">
        <button onClick={() => setFilter('all')} className={filter === '' ? "select-filter" : "unselected-filtro"}>All</button>
        <button onClick={() => setFilter('active')} className={filter === 'active' ? "select-filter" : "unselected-filtro"}>Active</button>
        <button onClick={() => setFilter('completed')} className={filter === 'completed' ? "select-filter" : "unselected-filtro"}>Completed</button>
      </div>
    </div>
  )
}

export default Filter
