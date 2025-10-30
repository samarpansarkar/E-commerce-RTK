import { createSlice, nanoid } from "@reduxjs/toolkit";
import { getAllCart } from "../reducers/Cart.reducer";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    isLoading: false,
    isError: false,
    errorMsg: "",
  },
  reducers: {
    createCart: (state, action) => {
      const cart = { id: nanoid(), ...action.payload };
      state.cart.push(cart);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCart.pending, (state) => {
      (state.cart = []),
        (state.isLoading = true),
        (state.isError = false),
        (state.errorMsg = "");
    });
    builder.addCase(getAllCart.fulfilled, (state, action) => {
      (state.isLoading = false),
        (state.isError = false),
        (state.errorMsg = ""),
        (state.cart = action.payload);
    });
    builder.addCase(getAllCart.rejected, (state, action) => {
      (state.isLoading = false),
        (state.isError = true),
        (state.errorMsg = action.error.message);
    });
  },
});

export const { createCart } = CartSlice.actions;
export default CartSlice.reducer;
