import { createSlice } from "@reduxjs/toolkit";
import { filterById } from "../utils/functions";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    selected: {},
    productData: [],
  },
  reducers: {
    setSelected: (state, action) => {
      state.selected = action.payload.selected;
      state.productData = filterById(action.payload.products, action.payload.selected.id)
    },
  },
});


export const { setSelected } = productSlice.actions;
export default productSlice.reducer;