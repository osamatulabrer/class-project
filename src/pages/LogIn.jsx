import { loginSchema } from '../validation/ValidationSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import { logInUser } from '../database/firebaseAuth';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { getUserProfile } from '../database/firebaseUtils';

const LogIn = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    
      let res = await logInUser(data);
      if (res.error) {
        toast.error(res.code );
       
        
      } else {
       
        console.log(res);
        let userProfile =await getUserProfile(res.id)
        console.log(userProfile)
        const loginUserInfo = {
          id:res.id,
          email:res.email,
          name:userProfile.name,
          role:userProfile.role
        }
        console.log(loginUserInfo);
        dispatch(logInUser(loginUserInfo))
        reset()
        
      }
        
      //   dispatch({ type: 'USER_LOGIN_SUCCESS', payload: res.user }); // Example action
   
   
    
  };

  return (
    <div>
      <div className='bg-[#d9d9d9] bg-opacity-20 rounded shadow-sm max-w-lg mx-auto p-5 my-12'>
        <h2 className='py-4 capitalize text-2xl font-bold text-center'>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col mb-5 space-y-2'>
            <label className='text-lg font-semibold capitalize'>Email Address</label>
            <input
              {...register('email')}
              placeholder='Enter Your Email'
              className='p-3 focus:outline-gray-400 border-gray-300 border rounded'
              type='text'
            />
            <p className='text-red-500 text-sm'>{errors.email?.message}</p>
          </div>
          <div className='flex flex-col mb-5 space-y-2'>
            <label className='text-lg font-semibold capitalize'>Password</label>
            <input
              {...register('password')}
              placeholder='Enter Your Password'
              className='p-3 focus:outline-gray-400 border-gray-300 border rounded'
              type='password'
            />
            <p className='text-red-500 text-sm'>{errors.password?.message}</p>
          </div>
          <div className='bg-[#5533ff] rounded-sm py-3 my-6 text-center'>
            <button type='submit' className='text-white font-semibold capitalize'>
              Login
            </button>
          </div>
          <span className='block text-center'>OR</span>
          <div className='bg-[#df0b0b] rounded-sm py-3 my-6 text-center'>
            <button className='text-white font-semibold capitalize'>Login with Google</button>
          </div>
          <p className='text-center text-md'>
            Don&apos;t have an account?
            <Link to='/register' className='text-[#5533ff]'>
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
