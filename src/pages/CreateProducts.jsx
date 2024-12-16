import { yupResolver } from "@hookform/resolvers/yup";
import { productFormSchema } from "../validation/ValidationSchema";
import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import { setProducts } from "../feature/products/ProductsSlice";
import { useNavigate } from "react-router";

const CreateProducts = () => {
const dispatch = useDispatch()
const navigate = useNavigate()
 const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    
  } = useForm({
    resolver: yupResolver(productFormSchema),
    defaultValues:{
      productName:'',
      productPrice:'',
      productImage:''
    }
   
  }); 
  const onSubmit = (data)=>{ 
    
    
   dispatch(setProducts(data));
   reset();
   navigate('/');

  }

  return (
    <div className='bg-[#d9d9d9] bg-opacity-20 rounded shadow-sm max-w-lg mx-auto p-5 my-12'>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col mb-5 space-y-3'>
            <label className='text-lg font-semibold capitalize' htmlFor="">product name</label>
            <input {...register('productName')} className='p-3  focus:outline-gray-400 border-gray-300 border rounded' type="text" />
            <p className="text-red-500 text-md">{errors.productName?.message}</p>
          </div>
          <div className='flex flex-col mb-5 space-y-3'>
            <label className='text-lg font-semibold capitalize' htmlFor="">Product Price</label>
            <input {...register('productPrice')} className='p-3  focus:outline-gray-400 border-gray-300 border rounded' type="number" />
             <p className="text-red-500 text-md">{errors.productPrice?.message}</p>
          </div>
          
          <div className='flex flex-col mb-5 space-y-3'>
            <label className='text-lg font-semibold capitalize' htmlFor="">Product Image </label>
            <input {...register('productImage')} className='p-3  focus:outline-gray-400 border-gray-300 border rounded' type="url" />
             <p className="text-red-500 text-md">{errors.productImage?.message}</p>
          </div>
          <div className='text-center my-10'>

          <button type="submit" className='bg-[#12B862] rounded-sm  text-white font-semibold capitalize py-2 px-6'>create new product</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateProducts 