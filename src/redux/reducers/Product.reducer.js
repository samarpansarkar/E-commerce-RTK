import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiManager from "../../utils/ApiManager";

export const getAllProducts = createAsyncThunk(
  "/products",
  async (_, { errorObj }) => {
    try {
      const res = await ApiManager("/products");
      const data = await res.data;
      return data;
    } catch (error) {
      alert("Product Reducer:", error.message);
      return errorObj(error);
    }
  }
);
