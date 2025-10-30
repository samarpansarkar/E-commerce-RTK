import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../redux/sclices/Product.slice.js";
import CartReducer from "../redux/sclices/Cart.slice.js";

const Store = configureStore({
  reducer: {
    products: ProductReducer,
    carts: CartReducer,
  },
});

export default Store;
