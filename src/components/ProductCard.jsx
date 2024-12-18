import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteProducts, getProducts } from "../feature/products/ProductsSlice";
import Modal from "./Modal";
import { removeDataFromFirebase } from "../database/firebaseUtils";
import { Link, } from "react-router";

const ProductCard = () => {
  const productsData = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [deleteProduct, setDeleteProduct] = useState(false);


  useEffect(() => {
    dispatch(getProducts()); // Fetch products on component mount
  }, [dispatch]);

  const closeModal = () => {
    setDeleteProduct(false);
  };

  const handleDelete = async (deleteProduct) => {
    if (deleteProduct) {
      await removeDataFromFirebase("products/" + deleteProduct); // Remove from Firebase
      dispatch(deleteProducts(deleteProduct)); // Update Redux state
      setDeleteProduct(false); // Close modal
    }
  };

  if (productsData.isLoading) {
    return <div className="text-center text-xl">Loading products...</div>;
  }

  if (productsData.isError) {
    return (
      <div className="text-center text-xl text-red-600">
        Error: {productsData.error}
      </div>
    );
  }

  return (
    <>
      <h2 className="text-2xl text-center my-7 capitalize font-semibold">
        Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-5 gap-5 mx-auto">
        {productsData.products?.length > 0 ? (
          productsData.products.map((item) => (
            <div key={item.id} className="shadow-md rounded-sm p-2 overflow-hidden">
              <img
                className="w-full h-64 object-cover mb-4"
                src={item.productImage}
                alt={item.productName}
              />
              <h4 className="font-bold text-2xl mb-4">{item.productName}</h4>
              <span className="text-[#E94560] mb-4 block">${item.productPrice}</span>
              <div className="flex gap-2 items-center mb-4">
                <FaStar className="text-[#FFCC00]" />
                <FaStar className="text-[#FFCC00]" />
                <FaStar className="text-[#FFCC00]" />
                <FaStar className="text-[#FFCC00]" />
              </div>
              <div className="flex justify-between items-center">
                <Link to={`/edit-product/${item.id}`} className="text-xl font-semibold capitalize text-white bg-[#12B862] py-2 px-7 rounded-sm">
                  Edit
                </Link>
                <button
                  onClick={() => setDeleteProduct(item.id)}
                  className="text-xl font-semibold capitalize text-white bg-[#E94560] py-2 px-7 rounded-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-xl">No products found.</div>
        )}
      </div>
      {deleteProduct && (
        <Modal
          onClose={closeModal}
          onDelete={() => handleDelete(deleteProduct)} // Pass product ID
        />
      )}
    </>
  );
};

export default ProductCard;
