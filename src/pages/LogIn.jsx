
import { loginSchema } from '../validation/ValidationSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import { logInUser } from '../database/firebaseAuth';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

const LogIn = () => {
const dispatch = useDispatch()

 const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  })

  const onSubmit = async(data)=> {
    let res = await logInUser(data)
    if(res.error){
      toast.error(res.code)
    }else{
      console.log(res);

    }
      
  }


  return (
    <div >
    <div className='bg-[#d9d9d9] bg-opacity-20 rounded shadow-sm max-w-lg mx-auto p-5 my-12'>
      <h2 className='py-4 capitalize text-2xl font-bold text-center'>login </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col mb-5 space-y-2'>
          <label className='text-lg font-semibold capitalize' htmlFor="">email address</label>
          <input {...register('email')} placeholder='Enter Your Email' className='p-3  focus:outline-gray-400 border-gray-300 border rounded' type="text" />
          <p className='text-red-500 text-sm'>{errors.email?.message}</p>
        </div>
        <div className='flex flex-col mb-5 space-y-2'>
          <label className='text-lg font-semibold capitalize' htmlFor="">password</label>
          <input {...register('password')} placeholder='Enter Your Password' className='p-3  focus:outline-gray-400 border-gray-300 border rounded' type="text" />
          <p className='text-red-500 text-sm'>{errors.password?.message}</p>
        </div>
      
        <div className='bg-[#5533ff] rounded-sm   py-3  my-6 text-center'>

        <button className='text-white font-semibold capitalize'>login</button>
        </div>
        <span className='block text-center'>OR</span>
        <div className='bg-[#df0b0b] rounded-sm py-3  my-6 text-center'>

        <button className='text-white font-semibold capitalize'>login with google</button>
        </div>
        <p className='text-center text-md'>
          don&apos;t have an account?
          <Link to='/register' className='text-[#5533ff]'>Register here</Link>
        </p>
      </form>
    </div>
  </div>
  )
}

export default LogIn