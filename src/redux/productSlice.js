import { createSlice } from "@reduxjs/toolkit";
import { filterById } from "../utils/functions";
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
      state.productData = filterById(products, state.selected.id)
    }
  },
});


export const { setSelected, setProductData } = productSlice.actions;
export default productSlice.reducer;