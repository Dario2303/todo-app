
const Filter = ({tasks}) => {

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
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  )
}

export default Filter
