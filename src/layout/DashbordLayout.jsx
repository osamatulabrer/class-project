import {  useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCategories } from "../feature/categories/CategorySlice";

import { Outlet } from "react-router";
import { getProducts } from "../feature/products/ProductsSlice";
import Sidebar from "../components/Sidebar";

const DashbordLayout = () => {
  const dispatch = useDispatch();



  useEffect(() => {
    async function getData() {
      getCategories();
      getProducts()
    }
     getData()
    },
[dispatch]);

 
 

  return (
    <div className="p-3 flex mx-auto rounded-md min-h-screen">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default DashbordLayout;
