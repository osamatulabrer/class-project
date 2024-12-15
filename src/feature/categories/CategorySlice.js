import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFirebaseData, removeDataFromFirebase } from "../../database/firebaseUtils";
import { handleAsyncThunk } from "./handleCategoriesThunk";

const initialState = {
  categories: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    let data = await getFirebaseData("categories");

    return data;
  }
);

export const deleteCategories = createAsyncThunk(
  "categories/deleteCategories",
  async (id) => {
      const conn = await removeDataFromFirebase("categories/" + id);
      return id;
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: 
  (builder) => {
    handleAsyncThunk(builder,getCategories)
    handleAsyncThunk(builder,deleteCategories)
    // builder.addCase(getCategories.pending, (state) => {
    //   state.isError = false;
    //   state.isLoading = true;
    // }).addCase(getCategories.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.categories = action.payload;
    // }).addCase(getCategories.rejected, (state, action) => {
    //   state.isError = false;
      
    //   state.error = action.payload.error?.message;
    // });
    // builder
   
    // .addCase(deleteCategories.fulfilled, (state, action) => {
    //  const categoryIndex = state.categories.findIndex(item => { return item.id == action.payload});
     
    //  state.categories.splice(categoryIndex,1)
     
     
    // }).addCase(deleteCategories.rejected, (state, action) => {
    //   state.isError = false;
    //   state.error = action.payload.error?.message;
    // });
  },
});
export default categoriesSlice.reducer;
