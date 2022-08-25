import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./features/customerSlice";
import callSlice from "./features/callSlice";
const store = configureStore({
  reducer: {
    customer: customerReducer,
    call: callSlice,
  },
});

export default store;
