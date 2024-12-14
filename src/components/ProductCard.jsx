import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const ProductCard = () => {
    const data = useSelector(state => state.product)
    const dispatch = useDispatch()
    useEffect(()=>{

    },[])
  return (
    <>
        <h2 className="text-2xl text-center my-7">products</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-5 gap-5 mx-auto">
        <div className='shadow-md rounded-sm p-2 overflow-hidden'>
            <img className='w-full h-64 object-cover mb-4' src="https://picsum.photos/200" alt="" />
            <h4 className='font-bold text-2xl mb-4'>Black Male T-Shirt</h4>
            <span className="text-[#E94560] mb-4 block">$40.99</span>
            <div className="flex gap-2 items-center mb-4">

            <FaStar className="text-[#FFCC00]"/>
            <FaStar className="text-[#FFCC00]"/>
            <FaStar className="text-[#FFCC00]"/>
            <FaStar className="text-[#FFCC00]"/>
            </div>
            <div className='flex justify-between items-center'>
                <button className="text-xl font-semibold capitalize text-white bg-[#12B862] py-2 px-7 rounded-sm">edit</button>
                <button className="text-xl font-semibold capitalize text-white bg-[#E94560] py-2 px-7 rounded-sm">delete</button>
            </div>
        </div>
        <div className='shadow-md rounded-sm p-2 overflow-hidden'>
            <img className='w-full h-64 object-cover mb-4' src="https://picsum.photos/200" alt="" />
            <h4 className='font-bold text-2xl mb-4'>Black Male T-Shirt</h4>
            <span className="text-[#E94560] mb-4 block">$40.99</span>
            <div className="flex gap-2 items-center mb-4">

            <FaStar className="text-[#FFCC00]"/>
            <FaStar className="text-[#FFCC00]"/>
            <FaStar className="text-[#FFCC00]"/>
            <FaStar className="text-[#FFCC00]"/>
            </div>
            <div className='flex justify-between items-center'>
                <button className="text-xl font-semibold capitalize text-white bg-[#12B862] py-2 px-7 rounded-sm">edit</button>
                <button className="text-xl font-semibold capitalize text-white bg-[#E94560] py-2 px-7 rounded-sm">delete</button>
            </div>
        </div>
        <div className='shadow-md rounded-sm p-2 '>
            <img className='w-80 h-64 object-cover mb-4' src="https://picsum.photos/200" alt="" />
            <h4 className='font-bold text-2xl mb-4'>Black Male T-Shirt</h4>
            <span className="text-[#E94560] mb-4 block">$40.99</span>
            <div className="flex gap-2 items-center mb-4">

            <FaStar className="text-[#FFCC00]"/>
            <FaStar className="text-[#FFCC00]"/>
            <FaStar className="text-[#FFCC00]"/>
            <FaStar className="text-[#FFCC00]"/>
            </div>
            <div className='flex justify-between items-center'>
                <button className="text-xl font-semibold capitalize text-white bg-[#12B862] py-2 px-7 rounded-sm">edit</button>
                <button className="text-xl font-semibold capitalize text-white bg-[#E94560] py-2 px-7 rounded-sm">delete</button>
            </div>
        </div>
        <div className='shadow-md rounded-sm p-2 '>
            <img className='w-80 h-64 object-cover mb-4' src="https://picsum.photos/200" alt="" />
            <h4 className='font-bold text-2xl mb-4'>Black Male T-Shirt</h4>
            <span className="text-[#E94560] mb-4 block">$40.99</span>
            <div className="flex gap-2 items-center mb-4">

            <FaStar className="text-[#FFCC00]"/>
            <FaStar className="text-[#FFCC00]"/>
            <FaStar className="text-[#FFCC00]"/>
            <FaStar className="text-[#FFCC00]"/>
            </div>
            <div className='flex justify-between items-center'>
                <button className="text-xl font-semibold capitalize text-white bg-[#12B862] py-2 px-7 rounded-sm">edit</button>
                <button className="text-xl font-semibold capitalize text-white bg-[#E94560] py-2 px-7 rounded-sm">delete</button>
            </div>
        </div>
        <div className='shadow-md rounded-sm p-2 '>
            <img className='w-80 h-64 object-cover mb-4' src="https://picsum.photos/200" alt="" />
            <h4 className='font-bold text-2xl mb-4'>Black Male T-Shirt</h4>
            <span className="text-[#E94560] mb-4 block">$40.99</span>
            <div className="flex gap-2 items-center mb-4">

            <FaStar className="text-[#FFCC00]"/>
            <FaStar className="text-[#FFCC00]"/>
            <FaStar className="text-[#FFCC00]"/>
            <FaStar className="text-[#FFCC00]"/>
            </div>
            <div className='flex justify-between items-center'>
                <button className="text-xl font-semibold capitalize text-white bg-[#12B862] py-2 px-7 rounded-sm">edit</button>
                <button className="text-xl font-semibold capitalize text-white bg-[#E94560] py-2 px-7 rounded-sm">delete</button>
            </div>
        </div>
        <div className='shadow-md rounded-sm p-2 '>
            <img className='w-80 h-64 object-cover mb-4' src="https://picsum.photos/200" alt="" />
            <h4 className='font-bold text-2xl mb-4'>Black Male T-Shirt</h4>
            <span className="text-[#E94560] mb-4 block">$40.99</span>
            <div className="flex gap-2 items-center mb-4">

            <FaStar className="text-[#FFCC00]"/>
            <FaStar className="text-[#FFCC00]"/>
            <FaStar className="text-[#FFCC00]"/>
            <FaStar className="text-[#FFCC00]"/>
            </div>
            <div className='flex justify-between items-center'>
                <button className="text-xl font-semibold capitalize text-white bg-[#12B862] py-2 px-7 rounded-sm">edit</button>
                <button className="text-xl font-semibold capitalize text-white bg-[#E94560] py-2 px-7 rounded-sm">delete</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductCard