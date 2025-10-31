import { createSlice, nanoid } from "@reduxjs/toolkit";
import {
  getAllProducts,
  productInfo,
  createProductAPI,
} from "../reducers/Product.reducer";

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    product: {},
    isLoading: false,
    isError: false,
    errorMsg: "",
  },
  reducers: {
    createProductLocal: (state, action) => {
      const product = { id: nanoid(), ...action.payload };
      state.products.push(product);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMsg = "";
      state.products = [];
    }),
      builder.addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.errorMsg = "";
        state.products = action.payload;
      }),
      builder.addCase(getAllProducts.rejected, (state, action) => {
        state.isError = true;
        state.errorMsg = action.error.message;
        state.isLoading = false;
        state.products = [];
      }),
      builder.addCase(productInfo.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMsg = "";
        state.products = [];
      }),
      builder.addCase(productInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.errorMsg = "";
        state.product = action.payload;
      }),
      builder.addCase(productInfo.rejected, (state, action) => {
        state.isError = true;
        state.errorMsg = action.error.message;
        state.isLoading = false;
        state.products = [];
      });

    builder.addCase(createProductAPI.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMsg = "";
      state.products = [];
      state.product = {};
    }),
      builder.addCase(createProductAPI.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.errorMsg = "";
        state.product = action.payload;
      }),
      builder.addCase(createProductAPI.rejected, (state, action) => {
        state.isError = true;
        state.errorMsg = action.error.message;
        state.isLoading = false;
        state.products = [];
      });
  },
});

export const { createProductLocal } = ProductSlice.actions;
export default ProductSlice.reducer;
