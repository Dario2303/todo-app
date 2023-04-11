
const Modal = ({cleanComplete}) => {

  return (
    <div className='modal-background'>
      <div className='modal rounded-3xl'>
        <p>Are you sure you want to delete all completed tasks?</p>
        <div>
            <button className='button-modal rounded-2xl bg-red-500 mr-16'
                    onClick={e => cleanComplete(e.target.value)}
                    value='delete'
                    >Delete</button>
            <button className='button-modal rounded-2xl bg-green-500'
                    onClick={e => cleanComplete(e.target.value)}
                    value='cancel'
                    >Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
