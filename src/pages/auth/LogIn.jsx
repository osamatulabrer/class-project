
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import { auth, loginUser } from '../../database/firebaseAuth';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { createUserProfile, getProfile } from '../../database/firebaseUtils';
import { setLoginUserDataToRedux } from '../../feature/auth/AuthSlice';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { loginSchema } from '../../validation/ValidationSchema';


const LogIn = () => {
 
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const googleAuthProvider = new GoogleAuthProvider();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema),
    });

    const onSubmit = async (data) => {
        const res = await loginUser(data);

        if (res.error) {
            toast.error(res.code);
        } else {
            // Login User;
            let userProfile = await getProfile(res.id);
            const loginUserInfo = {
                id: res.id,
                email: res.email,
                name: userProfile.name,
                role: userProfile.role,
            };

            dispatch(setLoginUserDataToRedux(loginUserInfo));
            reset();
            navigate("/dashboard");
        }
    };

    const loginWithGoogle = async () => {
        try {
            const res = await signInWithPopup(auth, googleAuthProvider);
            const user = res.user;

            const newUser = {
                id: user.uid,
                name: user.displayName,
                email: user.email,
            };

            const userProfile = await getProfile(user.uid);

            if (!userProfile || userProfile.email != user.email) {
                // Create a new user;
                createUserProfile(newUser);
                dispatch(
                    setLoginUserDataToRedux({
                        ...newUser,
                        role: "user",
                    })
                );
            } else {
                // Just set user information to redux;
                dispatch(
                    setLoginUserDataToRedux({
                        ...newUser,
                        role: userProfile.role,
                    })
                );
            }

            toast.success("You are logged in");
            navigate("/dashboard");
        } catch (error) {
            console.log(error);
        }
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
            <button onClick={loginWithGoogle} className='text-white font-semibold capitalize'>Login with Google</button>
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
