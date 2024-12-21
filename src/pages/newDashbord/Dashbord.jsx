import { Outlet } from "react-router";
import MetricCard from "./MetricCard";



const Dashboard = () => (
    <>
    <div className=" flex w-full flex-1 flex-col ">

 
  <div className=" p-6 bg-gray-100 min-h-screen">
    <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <MetricCard title="Total Users" value="10,000" />
      <MetricCard title="Revenue" value="$50,000" />
      <MetricCard title="Orders" value="1,200" />
      <MetricCard title="Active Subscriptions" value="800" />
    </div>
  </div>
  <Outlet/>
    </div>
    </>
);

export default Dashboard;
