import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  customers: null,
  error: "",
};

export const fetchCustomers = createAsyncThunk(
  "customer/fetchCustomers",
  () => {
    return axios.get("customers.json").then((response) => response.data);
  }
);

const customerSlice = createSlice({
  name: "customer",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCustomers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCustomers.fulfilled, (state, action) => {
      state.loading = false;
      state.customers = action.payload;
      state.error = "";
    });
    builder.addCase(fetchCustomers.rejected, (state, action) => {
      state.loading = false;
      state.customers = [];
      state.error = action.error.message;
    });
  },
});

export default customerSlice.reducer;
