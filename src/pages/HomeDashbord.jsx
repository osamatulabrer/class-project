import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategories, getCategories } from "../feature/categories/CategorySlice";
import { NavLink } from "react-router";
import Modal from "../components/Modal";
import { removeDataFromFirebase } from "../database/firebaseUtils";


const HomeDashbord = () => {
  const categoriesData = useSelector((state) => state.category); // Get category state from Redux
  const [deleteCategory, setDeleteCategory] = useState(false)
  const dispatch = useDispatch();
  const handleClick = (id)=> {
    setDeleteCategory(id)
  }
  const handleDelete = ()=> {
    if(deleteCategory)
   {dispatch( deleteCategories( deleteCategory))}
    
    setDeleteCategory(false)
  }
  const modalClose = ()=>{
    setDeleteCategory(false)
  }

  useEffect(() => {
    dispatch(getCategories()); // Fetch categories on component mount
  }, [dispatch]); // Added dispatch to dependency array

  let categorySectionContent;

  // Show loading state
  if (categoriesData.isLoading) {
    categorySectionContent = (
      <div className="text-center text-xl">data is loading...</div>
    );
  }

  // Show error state
  if (categoriesData.isError) {
    categorySectionContent = (
      <div className="text-center text-xl">
        Error || {categoriesData.error}
      </div>
    );
  }

  // Show no data state
  if (
    !categoriesData.isLoading &&
    !categoriesData.isError &&
    categoriesData.categories.length === 0 // Check categories length correctly
  ) {
    categorySectionContent = (
      <div className="text-center text-xl">no data found</div>
    );
  }

  // Show categories if data exists
  if (
    !categoriesData.isLoading &&
    !categoriesData.isError &&
    categoriesData.categories.length > 0 // Correct condition for valid data
  ) {
    categorySectionContent = categoriesData.categories.map((item) => (
      <div className="shadow-md" key={item.id}>
        <img
          className="w-44 h-44 object-cover mx-auto"
          src={item.
            categoryImageUrl
            }
          alt={item.
            categoryName} // Use descriptive alt text
        />
        <p className="text-center my-3">{item.categoryName}</p>
            <div className='flex justify-between items-center'>
                <NavLink to={`/edit-product/${item.id}`} className="text-lg font-semibold capitalize text-white bg-[#12B862] py-1 px-4 rounded-sm">edit</NavLink>
                <button onClick={() => handleClick(item.id)} className="text-lg font-semibold capitalize text-white bg-[#E94560] py-1 px-4 rounded-sm">delete</button>
            </div>
      </div>
    ));
  }

  return (
    <>
    {deleteCategory &&  <Modal onDelete={handleDelete} onClose={modalClose}/>}
    
      <div>
        <h1 className="text-5xl font-bold text-center capitalize my-24">
          home page
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {categorySectionContent} {/* Render the content dynamically */}
        </div>
      </div>

      <ProductCard /> {/* Render ProductCard component */}
     
    </>
  );
};

export default HomeDashbord;
