<<<<<<< Updated upstream
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
=======
import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
>>>>>>> Stashed changes
import enquiryService from "./enquiryService";

export const getEnquiries = createAsyncThunk(
  "enquiry/get-enquiries",
  async (thunkAPI) => {
    try {
      return await enquiryService.getEnquiries();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
<<<<<<< Updated upstream
=======
export const deleteAnEnquiry = createAsyncThunk(
  "enquiry/delete-enquiry",
  async (id, thunkAPI) => {
    try {
      return await enquiryService.deleteEnquiry(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const getAnEnquiry = createAsyncThunk(
  "enquiry/get-enquiry",
  async (id, thunkAPI) => {
    try {
      return await enquiryService.getEnquiry(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const updateAnEnquiry = createAsyncThunk(
  "enquiry/update-enquiry",
  async (enquiry, thunkAPI) => {
    try {
      return await enquiryService.updateEnquiry(enquiry);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const resetState = createAction("Reset_All") ;
>>>>>>> Stashed changes
const initialState = {
  enquiries: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const enquirySlice = createSlice({
  name: "enquiries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEnquiries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEnquiries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.enquiries = action.payload;
      })
      .addCase(getEnquiries.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
<<<<<<< Updated upstream
      });
=======
      }).addCase(deleteAnEnquiry.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAnEnquiry.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.deletedEnquiry = action.payload;
      })
      .addCase(deleteAnEnquiry.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      }).addCase(getAnEnquiry.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAnEnquiry.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.enquiryName = action.payload.name;
        state.enquiryMobile = action.payload.mobile;
        state.enquiryEmail = action.payload.email;
        state.enquiryComment = action.payload.comment;
        state.enquiryStatus = action.payload.status;
      })
      .addCase(getAnEnquiry.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      }).addCase(updateAnEnquiry.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAnEnquiry.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.updatedEnquiry = action.payload;
      })
      .addCase(updateAnEnquiry.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      }).addCase(resetState, ()=> initialState);
>>>>>>> Stashed changes
  },
});

export default enquirySlice.reducer;
