import { createSlice, nanoid } from "@reduxjs/toolkit";
import {
  getAllProducts,
  productInfo,
  createProductAPI,
  deleteProductAPI,
  updateProductAPI,
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
    deleteProductLocal: (state, action) => {
      const productId = action.payload;
      state.products = state.products.filter((p) => p.id !== productId);
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

    builder.addCase(deleteProductAPI.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMsg = "";
    }),
      builder.addCase(deleteProductAPI.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
        state.errorMsg = "";
        // const deletedId = action.payload.id;  //! I dont use this filter method here because I crate a local delete product reducer and it handle the ui part. This comment is not from chatGPT or any other AI.
        // state.products = state.products.filter((p) => p.id !== deletedId);
      }),
      builder.addCase(deleteProductAPI.rejected, (state, action) => {
        state.isError = true;
        state.errorMsg = action.error.message;
        state.isLoading = false;
      });

    builder.addCase(updateProductAPI.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMsg = "";
    }),
      builder.addCase(updateProductAPI.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.errorMsg = "";
        state.product = action.payload;
      }),
      builder.addCase(updateProductAPI.rejected, (state, action) => {
        state.isError = true;
        state.errorMsg = action.error.message;
        state.isLoading = false;
      });
  },
});

export const { createProductLocal, deleteProductLocal } = ProductSlice.actions;
export default ProductSlice.reducer;
