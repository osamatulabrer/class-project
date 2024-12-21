
import { NavLink } from "react-router";


const Sidebar = () => (
  <div className="h-screen w-64 bg-gray-800 text-white sticky">
    <h2 className="text-2xl font-bold p-4">Admin Panel</h2>
    <nav className="flex flex-col space-y-4 p-4"> 
      <ul>
        <li> <NavLink to='/'>dashbord</NavLink></li>
        <li> <NavLink to='/'>dashbord</NavLink></li>
        <li> <NavLink to='/'>dashbord</NavLink></li>
        <li> <NavLink to='/'>dashbord</NavLink></li>
        <li> <NavLink to='/'>dashbord</NavLink></li>
      </ul>
     
    
    </nav>
  </div>
);

export default Sidebar;
