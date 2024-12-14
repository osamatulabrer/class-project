import { Outlet } from "react-router";
import Navbar from "../components/Navbar";


const DashbordLayout = () => {
  return (
    <div className="w-11/12 mx-auto">
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default DashbordLayout;