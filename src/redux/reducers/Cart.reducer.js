import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiManager from "../../utils/ApiManager";

export const getAllCart = createAsyncThunk("/cart", async (_, { errorObj }) => {
  try {
    const res = await ApiManager.get("/cart");
    const data = await res.data;
    return data;
  } catch (error) {
    alert("Cart Reducer", error.message);
    return errorObj(error);
  }
});


