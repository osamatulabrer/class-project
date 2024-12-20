import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import Avatar from 'react-avatar';




const DashbordLayout = () => {
  const authUser = useSelector((state) => state.auth);
  return (
    <div className="w-11/12 mx-auto">
        <Navbar/>
        <h1 className="text-3xl text-center">{<Avatar name={authUser.user.name} size="50" round={true} />}{authUser.user.name}</h1>
        <Outlet/>
       
    </div>
  )
}

export default DashbordLayout;