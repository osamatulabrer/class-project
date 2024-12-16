import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";



const DashbordLayout = () => {
  return (
    <div className="w-11/12 mx-auto">
        <Navbar/>
        <Outlet/>
       
    </div>
  )
}

export default DashbordLayout;