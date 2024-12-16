import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteProducts, getProducts } from "../feature/products/ProductsSlice";
import Modal from "./Modal";


const ProductCard = () => {
    const products = useSelector(state => state.product);
    
   
    const dispatch = useDispatch();
    const [deleteProduct, setDeleteProduct] = useState(false)
    
    
     useEffect(() => {
        dispatch(getProducts()); // Fetch categories on component mount
      }, [dispatch]); 

      const handleClick = (id)=>{
        setDeleteProduct(id)
      }
     const closeModal = ()=>{
      setDeleteProduct(false)
     }
     const handleDelete = (deleteProduct)=>{
        dispatch(deleteProducts(deleteProduct))
      setDeleteProduct(false)
     }
  return (
    <>
   
        <h2 className="text-2xl text-center my-7 capitalize font-semibold">products</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-5 gap-5 mx-auto">
        {products.products.map(item => (
              <div key={item.id} className='shadow-md rounded-sm p-2 overflow-hidden'>
              <img className='w-full h-64 object-cover mb-4' src={item.productImage} alt="" />
              <h4 className='font-bold text-2xl mb-4'>{item.productName}</h4>
              <span className="text-[#E94560] mb-4 block">${item.productPrice}</span>
              <div className="flex gap-2 items-center mb-4">
  
              <FaStar className="text-[#FFCC00]"/>
              <FaStar className="text-[#FFCC00]"/>
              <FaStar className="text-[#FFCC00]"/>
              <FaStar className="text-[#FFCC00]"/>
              </div>
              <div className='flex justify-between items-center'>
                  <button className="text-xl font-semibold capitalize text-white bg-[#12B862] py-2 px-7 rounded-sm">edit</button>
                  <button onClick={() =>handleClick(item.id)} className="text-xl font-semibold capitalize text-white bg-[#E94560] py-2 px-7 rounded-sm">delete</button>
              </div>
          </div>
        ))}
      
      {deleteProduct && <Modal onClose={closeModal} onDelete={handleDelete}/>} 
    </div>
    
    </>
  )
}

export default ProductCard