import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getFirebaseData,
  removeDataFromFirebase,
  setDataToFirebase,
} from "../../database/firebaseUtils";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  error: null,
};

// Fetch products
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const data = await getFirebaseData("products");
    return data;
  
    
  }
);

// Delete product
export const deleteProducts = createAsyncThunk(
  "products/deleteProducts",
  async (id) => {
    await removeDataFromFirebase("products/" + id);
    return id; 
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      setDataToFirebase("products", action.payload);
      state.products.push(action.payload); // Update state with new product
    },
    
  },
  extraReducers: (builder) => {
    // Fetch products
    builder
      .addCase(getProducts.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload; // Update state with fetched products
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message || "Failed to fetch products.";
      });

    // Delete product
    builder
      .addCase(deleteProducts.fulfilled, (state, action) => {
       
        const productIndex = state.products.findIndex(item => { return item.id === action.payload});
     
         state.products.splice(productIndex,1)
      })
      .addCase(deleteProducts.rejected, (state, action) => {
        state.isError = true;
        state.error = action.error?.message || "Failed to delete product.";
      });
  },
});

export default productsSlice.reducer;
export const { setProducts } = productsSlice.actions;
