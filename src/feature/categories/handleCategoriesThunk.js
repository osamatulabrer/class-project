import { getCategories } from "./CategorySlice";

const handleAsyncThunk = (builder,asyncThunk)=>{
     builder
     .addCase(asyncThunk.pending, (state) => {
          state.isError = false;
          state.isLoading = true;
        })
        .addCase(asyncThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            if (action.type == "categories/getCategories/fulfilled") {
                state.categories = action.payload;
            }
            if (action.type == "categories/deleteCategories/fulfilled") {
                  const categoryIndex = state.categories.findIndex(item => { return item.id == action.payload});
     
                  state.categories.splice(categoryIndex,1)
            }
         
        })
        .addCase(asyncThunk.rejected, (state, action) => {
          state.isError = false;
          state.isLoading = false;
          state.error = action.payload.error?.message;
        });
}
export {handleAsyncThunk}