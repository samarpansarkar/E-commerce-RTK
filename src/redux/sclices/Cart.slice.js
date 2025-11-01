import { createSlice, nanoid } from "@reduxjs/toolkit";
import {
  getAllCart,
  deleteCartItemAPI,
  addToCartAPI,
  updateCartQuantityAPI,
} from "../reducers/Cart.reducer";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    isLoading: false,
    isError: false,
    errorMsg: "",
  },
  reducers: {
    addToCartLocal: (state, action) => {
      const existing = state.cart.find((item) => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.cart.push({ id: nanoid(), quantity: 1, ...action.payload });
      }
    },
    deleteProductLocal: (state, action) => {
      const cartId = action.payload;
      state.cart = state.cart.filter((p) => p.id !== cartId);
    },

    incrementQuantity: (state, action) => {
      const item = state.cart.find((i) => i.product.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    decrementQuantity: (state, action) => {
      const item = state.cart.find((i) => i.product.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else if (item && item.quantity === 1) {
        state.cart = state.cart.filter((i) => i.product.id !== action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCart.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMsg = "";
    });
    builder.addCase(getAllCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.errorMsg = "";
      state.cart = action.payload;
    });
    builder.addCase(getAllCart.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMsg = action.error.message;
    });

    builder.addCase(addToCartAPI.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMsg = "";
    });
    builder.addCase(addToCartAPI.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.errorMsg = "";
      const existing = state.cart.find((i) => i.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    });
    builder.addCase(addToCartAPI.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMsg = action.error.message;
    });

    builder.addCase(deleteCartItemAPI.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMsg = "";
    });
    builder.addCase(deleteCartItemAPI.fulfilled, (state) => {
      state.isLoading = false;
      state.isError = false;
      state.errorMsg = "";
    });
    builder.addCase(deleteCartItemAPI.rejected, (state, action) => {
      state.isError = true;
      state.errorMsg = action.error.message;
      state.isLoading = false;
    });

    builder.addCase(updateCartQuantityAPI.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateCartQuantityAPI.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.errorMsg = "";

      const updatedItem = action.payload;
      const existing = state.cart.find(
        (i) => i.product.id === updatedItem.product.id
      );
      if (existing) {
        existing.quantity = updatedItem.quantity;
      }
    });
    builder.addCase(updateCartQuantityAPI.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMsg = action.payload;
    });
  },
});

export const {
  addToCartLocal,
  incrementQuantity,
  decrementQuantity,
  deleteProductLocal,
} = CartSlice.actions;
export default CartSlice.reducer;
