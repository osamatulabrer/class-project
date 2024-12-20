import { configureStore } from "@reduxjs/toolkit";
import productsSlice from '../feature/products/ProductsSlice.jsx'
import categoriesSlice from '../feature/categories/CategorySlice.js'
import  authSlice  from "../feature/auth/AuthSlice.js";
import { auth } from "../database/firebaseAuth.js";

const store = configureStore({
    reducer:{
        product:productsSlice,
        category:categoriesSlice,
        auth:authSlice
    }
   
    
})
console.log(auth);

export default store