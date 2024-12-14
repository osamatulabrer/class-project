import React from 'react'

const LogIn = () => {
  return (
    <div className='bg-[#d9d9d9] bg-opacity-20 rounded shadow-sm max-w-lg mx-auto p-5 my-12'>
    <div>
      <h2 className='py-4 capitalize text-2xl font-bold text-center'>add product </h2>
      <form action="">
        <div className='flex flex-col mb-5 space-y-3'>
          <label className='text-lg font-semibold capitalize' htmlFor="">username</label>
          <input className='p-3  focus:outline-gray-400 border-gray-300 border rounded' type="text" />
        </div>
        <div className='flex flex-col mb-5 space-y-3'>
          <label className='text-lg font-semibold capitalize' htmlFor="">password</label>
          <input className='p-3  focus:outline-gray-400 border-gray-300 border rounded' type="text" />
        </div>
      
        <div className='bg-[#12B862] rounded-sm   py-3  my-10 text-center'>

        <button className='text-white font-semibold capitalize'>logint</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default LogIn