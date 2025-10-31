import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiManager from "../../utils/ApiManager";

export const getAllProducts = createAsyncThunk(
  "/products",
  async (_, { rejectWithValue }) => {
    try {
      const res = await ApiManager("/products");
      return res.data;
    } catch (error) {
      alert("Product Reducer:", error.message);
      return rejectWithValue(error);
    }
  }
);

export const productInfo = createAsyncThunk(
  "/product/productInfo",
  async (id, { rejectWithValue }) => {
    try {
      const res = await ApiManager.get(`/products/${id}`);
      return res.data;
    } catch (error) {
      alert("Product reducer", error.message);
      return rejectWithValue(error);
    }
  }
);

export const createProductAPI = createAsyncThunk(
  "/product/createProduct",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await ApiManager.post("/products", formData);
      return res.data;
    } catch (error) {
      alert("Product Reducer", error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const deleteProductAPI = createAsyncThunk(
  "/product/deleteProduct",
  async (id, { rejectWithValue }) => {
    try {
      const res = await ApiManager.delete(`/products/${id}`);
      return res.data;
    } catch (error) {
      alert("Product Reducer", error.message);
      return rejectWithValue(error.message);
    }
  }
);
