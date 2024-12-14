import React from 'react'

const CreateProducts = () => {
  return (
    <div className='bg-[#d9d9d9] bg-opacity-20 rounded shadow-sm max-w-lg mx-auto p-5 my-12'>
      <div>
        <form action="">
          <div className='flex flex-col mb-5 space-y-3'>
            <label className='text-lg font-semibold capitalize' htmlFor="">product name</label>
            <input className='p-3  focus:outline-gray-400 border-gray-300 border rounded' type="text" />
          </div>
          <div className='flex flex-col mb-5 space-y-3'>
            <label className='text-lg font-semibold capitalize' htmlFor="">Product Price</label>
            <input className='p-3  focus:outline-gray-400 border-gray-300 border rounded' type="text" />
          </div>
          <div className='flex flex-col mb-5 space-y-3'>
            <label className='text-lg font-semibold capitalize' htmlFor="">Product Ratting </label>
            <input className='p-3  focus:outline-gray-400 border-gray-300 border rounded' type="text" />
          </div>
          <div className='flex flex-col mb-5 space-y-3'>
            <label className='text-lg font-semibold capitalize' htmlFor="">Product Image </label>
            <input className='p-3  focus:outline-gray-400 border-gray-300 border rounded' type="text" />
          </div>
          <div className='text-center my-10'>

          <button className='bg-[#12B862] rounded-sm  text-white font-semibold capitalize py-2 px-6'>create new product</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateProducts 