import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  calls: null,
  error: "",
};

export const fetchCalls = createAsyncThunk("call/fetchCalls", () => {
  return axios.get("calls.json").then((response) => response.data);
});

const callSlice = createSlice({
  name: "call",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCalls.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCalls.fulfilled, (state, action) => {
      state.loading = false;
      state.calls = action.payload;
      state.error = "";
    });
    builder.addCase(fetchCalls.rejected, (state, action) => {
      state.loading = false;
      state.calls = [];
      state.error = action.error.message;
    });
  },
});

export default callSlice.reducer;
