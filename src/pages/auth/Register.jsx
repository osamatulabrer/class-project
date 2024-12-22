import { yupResolver } from '@hookform/resolvers/yup'

import { useForm } from 'react-hook-form'

import { registerUser } from '../../database/firebaseAuth'
import { toast } from 'react-toastify'
import { createUserProfile } from '../../database/firebaseUtils'
import { Link, useNavigate } from 'react-router'
import { registerSchema } from '../../validation/ValidationSchema'

const Register = () => {
  const navigate = useNavigate();
  const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
  } = useForm({
      resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data) => {
      const formData = {
          name: data.name,
          email: data.email,
          password: data.password,
          role: "user",
      };
      const res = await registerUser(formData);

      if (res.error) {
          toast.error(res.code);
      } else {
          // already registered;
          createUserProfile(res);
          reset();
          toast.success("You are successfully registered");
          navigate("/login");
      }
  
   

       
  }
  return (
    <div >
    <div className='bg-[#d9d9d9] bg-opacity-20 rounded shadow-sm max-w-lg mx-auto p-5 my-12'>
      <h2 className='py-4 capitalize text-2xl font-bold text-center'>register </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col mb-5 space-y-2'>
          <label className='text-lg font-semibold capitalize' htmlFor="">name</label>
          <input {...register('name')} placeholder='Enter your name' className='p-3  focus:outline-gray-400 border-gray-300 border rounded' type="text" />
          <p className='text-red-500 text-sm'>{errors.name?.message}</p>
        </div>
        <div className='flex flex-col mb-5 space-y-2'>
          <label className='text-lg font-semibold capitalize' htmlFor="">email address</label>
          <input {...register('email')} placeholder='Enter Your email' className='p-3  focus:outline-gray-400 border-gray-300 border rounded' type="email" />
          <p className='text-red-500 text-sm'>{errors.email?.message}</p>
        </div>
        <div className='flex flex-col mb-5 space-y-2'>
          <label className='text-lg font-semibold capitalize' htmlFor="">password</label>
          <input {...register('password')} placeholder='Enter Your password' className='p-3  focus:outline-gray-400 border-gray-300 border rounded' type="password" />
          <p className='text-red-500 text-sm'>{errors.password?.message}</p>
        </div>
        <div className='flex flex-col mb-5 space-y-2'>
          <label className='text-lg font-semibold capitalize' htmlFor="">confirm password</label>
          <input {...register('confirmPassword')} placeholder='confirm Your password' className='p-3  focus:outline-gray-400 border-gray-300 border rounded' type="password" />
          <p className='text-red-500 text-sm'>{errors.confirmPassword?.message}</p>
        </div>
      
        <div className='bg-[#5533ff] rounded-sm   py-3  my-8 text-center'>

        <button className='text-white font-semibold ' type='submit'>Register</button>
        </div>
        
        <p className='text-center text-md'>
          already have an account?
          <Link to='/login' className='text-[#5533ff]'>login here</Link>
        </p>
      </form>
    </div>
  </div>
  )
}

export default Register