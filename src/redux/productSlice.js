import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "productToCount",
  initialState: {
    productToCount: {}
  },
  reducers: {
    setProductToCount: (state, action) => {
      state.productToCount = action.payload;
    },
  },
});


export const { setProductToCount } = productSlice.actions;
export default productSlice.reducer;