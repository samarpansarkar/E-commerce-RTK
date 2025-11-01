import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiManager from "../../utils/ApiManager";

export const getAllCart = createAsyncThunk(
  "/cart",
  async (_, { rejectWithValue }) => {
    try {
      const res = await ApiManager.get("/cart");
      const data = await res.data;
      return data;
    } catch (error) {
      alert("Cart Reducer", error.message);
      return rejectWithValue(error);
    }
  }
);

export const addToCart = createAsyncThunk(
  "/cart/add",
  async (cartData, { rejectWithValue }) => {
    try {
      const res = await ApiManager.post("/cart", cartData);
      const data = await res.data;
      return data;
    } catch (error) {
      alert("Cart Reducer", error.message);
      return rejectWithValue(error);
    }
  }
);
