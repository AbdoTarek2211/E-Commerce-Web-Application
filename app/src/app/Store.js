import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Features/User/UserSlice";
import productReducer from "../Features/Products/ProductSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
  },
});
