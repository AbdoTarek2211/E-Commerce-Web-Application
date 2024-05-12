import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Features/User/UserSlice";
import productReducer from "../Features/Products/ProductSlice";
import blogReducer from "../Features/blogs/blogSlice";
import contactReducer from "../Features/contact/contactSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    blog: blogReducer,
    contact: contactReducer,
  },
});
