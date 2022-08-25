import "./App.css";
import { CustomerList } from "./components/CustomerList";
import { fetchCustomers } from "./features/customerSlice";
import { fetchCalls } from "./features/callSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCustomers());
    dispatch(fetchCalls());
  }, []);
  return (
    <div className="App">
      <Typography variant="h2" component="h1" sx={{ margin: "30px 0" }}>
        Callers App
      </Typography>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <CustomerList />
      </div>
    </div>
  );
}

export default App;
