import { NavLink } from "react-router";



const Sidebar = () => (
  <div className="min-h-screen w-64 bg-gray-800 text-white sticky">
    <h2 className="text-2xl font-bold p-4">Admin Panel</h2>
    <nav className="p-4">
      <ul className="flex flex-col space-y-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-semibold" : "text-white"
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-semibold" : "text-white"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="create-category"
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-semibold" : "text-white"
            }
          >
            Category
          </NavLink>
        </li>
        <li>
          <NavLink
            to="create-product"
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-semibold" : "text-white"
            }
          >
            Product
          </NavLink>
        </li>
        <li>
          <NavLink
            to="create-product"
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-semibold" : "text-white"
            }
          >
            users
          </NavLink>
        </li>
        
      </ul>
    </nav>
  </div>
);

export default Sidebar;

