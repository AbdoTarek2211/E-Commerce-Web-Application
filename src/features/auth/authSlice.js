import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authServices";

const getUserfromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
const initialState = {
  user: getUserfromLocalStorage,
  orders: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const login = createAsyncThunk(
  "auth/admin-login",
  async (user, thunkAPI) => {
    try {
      return await authService.login(user);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getOrders = createAsyncThunk(
  "order/get-orders",
  async (thunkAPI) => {
    try {
      return await authService.getOrders();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
      state.message = "success";
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isError = true;
      state.isSuccess = false;
      state.message = action.error;
      state.isLoading = false;
    });
    builder.addCase(getOrders.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getOrders.fulfilled, (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = true;
      state.orders = action.payload;
      state.message = "success";
    });
    builder.addCase(getOrders.rejected, (state, action) => {
      state.isError = true;
      state.isSuccess = false;
      state.message = action.error;
      state.isLoading = false;
    });
  },
});

export default authSlice.reducer;
