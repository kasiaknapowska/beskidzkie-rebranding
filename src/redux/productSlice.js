import { createSlice } from "@reduxjs/toolkit";
import { selectProduct } from "../utils/functions";
import {products} from "../data/data"

export const productSlice = createSlice({
  name: "product",
  initialState: {
    selected: {},
    productData: [],
  },
  reducers: {
    setSelected: (state, action) => {
      state.selected = action.payload;

      productSlice.caseReducers.setProductData(state);
    },
    setProductData: (state, action) => {
      state.productData = selectProduct(products, state.selected.id)
    }
  },
});


export const { setSelected } = productSlice.actions;
export default productSlice.reducer;