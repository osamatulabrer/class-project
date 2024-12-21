

import Dashboard from "../pages/newDashbord/Dashbord";
import Sidebar from "../pages/newDashbord/Sidebar";

import { Outlet } from "react-router";




const DashbordLayout = () => {

  return (
    <div className="p-3 flex mx-auto rounded-md min-h-screen">
     <Sidebar/>
    <Dashboard/>
    </div>
  )
}

export default DashbordLayout;