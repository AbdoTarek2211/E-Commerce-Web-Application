import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./UserService";

export const registerUser = createAsyncThunk(
  "/auth/register",
  async (userData, thunkAPI) => {
    try {
      return await authService.register(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  user: "",
  isError: false,
  isSuccessful: false,
  isLoading: false,
  message: "",
};

export const authSlice = {
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccessful = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccessful = false;
        state.message = action.error;
      });
  },
};

export default authSlice.reducers;
