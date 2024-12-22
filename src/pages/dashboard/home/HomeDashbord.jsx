import { useEffect,  } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../feature/categories/CategorySlice";


import MetricCard from "../../../components/MetricCard";
import Navbar from "../../../components/Navbar";
import { getProducts } from "../../../feature/products/ProductsSlice";




const HomeDashbord = () => {

  const categories = useSelector((store) => store.category)
  const products = useSelector((store) => store.product)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories()); 
    dispatch(getProducts()); 
  }, [dispatch]);
  
  
  // const [deleteCategory, setDeleteCategory] = useState(false)
  
 
  
  
  // const handleDelete = ()=> {
  //   if(deleteCategory)
  //  {dispatch( deleteCategories( deleteCategory))}
    
  //   setDeleteCategory(false)
  // }
  // const modalClose = ()=>{
  //   setDeleteCategory(false)
  // }

  // useEffect(() => {
  //   dispatch(getCategories()); // Fetch categories on component mount
  // }, [dispatch]); // Added dispatch to dependency array

  // let categorySectionContent;

  // // Show loading state
  // if (categoriesData.isLoading) {
  //   categorySectionContent = (
  //     <div className="text-center text-xl">data is loading...</div>
  //   );
  // }

  // // Show error state
  // if (categoriesData.isError) {
  //   categorySectionContent = (
  //     <div className="text-center text-xl">
  //       Error || {categoriesData.error}
  //     </div>
  //   );
  // }

  // // Show no data state
  // if (
  //   !categoriesData.isLoading &&
  //   !categoriesData.isError &&
  //   categoriesData.categories.length === 0 // Check categories length correctly
  // ) {
  //   categorySectionContent = (
  //     <div className="text-center text-xl">no data found</div>
  //   );
  // }

  // // Show categories if data exists
  // if (
  //   !categoriesData.isLoading &&
  //   !categoriesData.isError &&
  //   categoriesData.categories.length > 0 // Correct condition for valid data
  // ) {
  //   categorySectionContent = categoriesData.categories.map((item) => (
  //     <div className="shadow-md" key={item.id}>
  //       <img
  //         className="w-44 h-44 object-cover mx-auto"
  //         src={item.
  //           categoryImageUrl

  //           }
  //         alt={item.
  //           categoryName} // Use descriptive alt text
  //       />
  //       <p className="text-center my-3">{item.categoryName}</p>
  //           <div className='flex justify-between items-center'>
  //               <NavLink to={`/edit-category/${item.id}`} className="text-lg font-semibold capitalize text-white bg-[#12B862] py-1 px-4 rounded-sm">edit</NavLink>
  //               <button onClick={() => setDeleteCategory(item.id)} className="text-lg font-semibold capitalize text-white bg-[#E94560] py-1 px-4 rounded-sm">delete</button>
  //           </div>
  //     </div>
  //   ));
  // }

  return (
    <>
    <div className=" flex w-full flex-col ">
    <Navbar/>
 
  <div className=" p-6 bg-gray-100 min-h-screen">
    <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <MetricCard title="Total Category" value={categories.categories.length} />
      <MetricCard title="Total Product" value={products.products.length} />
      <MetricCard title="Users" value="1,200" />
      <MetricCard title="Active Subscriptions" value="800" />
    </div>
  </div>
 
    </div>
    </>
  );
};

export default HomeDashbord;
