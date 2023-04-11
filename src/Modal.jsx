import React from 'react'

const Modal = () => {
  return (
    <div className='modal-background'>
      <div className='modal rounded-3xl'>
        <p>Are you sure you want to delete all completed tasks?</p>
        <div>
            <button className='button-modal rounded-2xl bg-red-500'>Aceptar</button>
            <button className='button-modal rounded-2xl bg-green-500'>Cancelar</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
