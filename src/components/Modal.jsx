import React from 'react'

const Modal = ({onClose,onDelete }) => {
  return (
    <div className='bg-black/30 w-full h-screen fixed top-0 left-0 z-10'>
        <div className='max-w-md mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-sm rounded-md bg-white p-6'>
            <p className='text-xl font-semibold my-5'>are you sure want to delete it?</p>
            <div className='flex items-center justify-center gap-4'>
                <button onClick={onDelete} className='py-2 px-5 bg-green-500 rounded-sm text-white font-semibold'>yes</button>
                <button onClick={onClose} className='py-2 px-5 bg-red-500 rounded-sm text-white font-semibold'>cancle</button>
            </div>
        </div>
    </div>
  )
}

export default Modal