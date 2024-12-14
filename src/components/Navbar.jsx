import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-10  shadow-md px-3 sticky top-0'>
        <NavLink to='/' className='bg-[#12B862] py-2 px-5 text-white font-semibold text-xl leading-7 rounded-sm'>Home</NavLink>
        <div className='flex items-center gap-3'>
            <NavLink to='/Create-product' className='bg-[#12B862] py-2 px-5 text-white font-semibold text-xl leading-7 capitalize rounded-sm'>create product</NavLink>
            <NavLink to='/Create-category' className='bg-[#12B862] py-2 px-5 text-white font-semibold text-xl leading-7 capitalize rounded-sm'>create category</NavLink>
        </div>
    </div>
  )
}

export default Navbar