import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "productToCount",
  initialState: {
    item: {}
  },
  reducers: {
    setProductToCount: (state, action) => {
      state.item = action.payload;
    },
  },
});


export const { setProductToCount } = productSlice.actions;
export default productSlice.reducer;