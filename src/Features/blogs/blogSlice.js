import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { blogService } from "./blogServices";

export const getAllBlogs = createAsyncThunk("blogs/get", async (thunkAPI) => {
  try {
    return await blogService.getBlogs();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const getSingleBlog = createAsyncThunk(
  "blog/get",
  async (id, thunkAPI) => {
    try {
      return await blogService.getBlog(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const blogState = {
  product: "",
  isLoading: false,
  isError: false,
  isSuccessful: false,
  message: "",
};

export const blogSlice = createSlice({
  name: "blog",
  initialState: blogState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBlogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccessful = true;
        state.blog = action.payload;
      })
      .addCase(getAllBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccessful = false;
        state.message = action.error;
      })
      .addCase(getSingleBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccessful = true;
        state.singleBlog = action.payload;
      })
      .addCase(getSingleBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccessful = false;
        state.message = action.error;
      });
  },
});

export default blogSlice.reducer;
